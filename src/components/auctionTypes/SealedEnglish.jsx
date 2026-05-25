import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import TimeCountdown from "../TimeCountdown.jsx";
import { placeBid } from "../../socket/socketService.js";
import Swal from "sweetalert2";
import { mainButtonColor } from "../../common/mainColor.js";
import useAuctionStore from "../../stores/auction.store.js";
import useUserStore from "../../stores/user.store.js";
import { Envelope } from "../../icons/index.jsx";
import BidEnvelope from "./BidEnvelope.jsx";

function SealedEnglish(props) {
  const { auctionId, users } = props;
  const [yourBids, setYourBids] = useState({});
  const [bidStatus, setBidStatus] = useState("idle"); // "idle" | "animating"
  const [bidAmount, setBidAmount] = useState("");
  const envelopeRef = useRef(null);
  const { user } = useUserStore();
  const { auctionById, getAuctionById } = useAuctionStore();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setValue,
    getValues,
    watch,
  } = useForm();

  const { isDirty } = formState;

  const hdlOnSubmit = ({ amount }) => {
    // guard that it's higher than your previous bids
    const yourCurrentHighestBid = yourBids.reduce((max, cur) => {
      const currentAmount = Number(cur.amount);
      return currentAmount > max ? currentAmount : max;
    }, 0);

    if (amount < yourCurrentHighestBid) {
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        html: `Amount must be higher than your previous bid: ${yourCurrentHighestBid} ฿`,
        confirmButtonText: "OK",
        confirmButtonColor: mainButtonColor,
      });
      return;
    }
    placeBid(amount, auctionId);
    setBidAmount(amount);
    setBidStatus("animating");
    reset();
  };

  useEffect(() => {
    if (bidStatus === 'idle') return;

    if (bidStatus === "animating" && envelopeRef.current) {
      envelopeRef.current.triggerAnimation();
    }
  }, [bidStatus]);

  // const currentVal = watch("amount");

  const hdlIncreaseAmountInput = (times) => {
    const currentVal = getValues("amount");

    const baseValue = currentVal
      ? Number(currentVal)
      : Number(auctionById?.startingPrice);

    const increment = Number(auctionById?.minIncrement || 0);
    const newValue = baseValue + increment * times;

    setValue("amount", newValue, { shouldDirty: true });
    // console.log(getValues("amount"));
  };

  const hdlDecreaseAmountInput = (times) => {
    const currentVal = getValues("amount");

    const baseValue = currentVal
      ? Number(currentVal)
      : Number(auctionById?.startingPrice);

    const increment = Number(auctionById?.minIncrement || 0);
    const newValue = baseValue - increment * times;

    setValue("amount", newValue, { shouldDirty: true });
    // console.log(getValues("amount"));
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAuctionById(auctionId);
      if (auctionById?.bids) {
        const filteredCurrentUserBids = auctionById.bids.filter(
          (bid) => bid.bidderId === user.id,
        );
        setYourBids(filteredCurrentUserBids);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("use effect running sealed bid is updated");
    const filteredCurrentUserBids = auctionById?.bids.filter(
      (bid) => bid.bidderId === user.id,
    );
    setYourBids(filteredCurrentUserBids);
  }, [auctionById]);

  return (
    <>
      {/* Right Column: Bidding Panel */}
      <div className="lg:col-span-5">
        <div className="sticky top-32 space-y-8">
          <div className="bg-[#f6f3f2] p-8 md:p-10 rounded-lg border border-[#e2bfb9]/10">
            <div className="flex justify-between items-center mb-10">
              <div>
                <p className="font-['Manrope'] text-[12px] text-black mb-2 uppercase tracking-widest">
                  Number of Bids
                </p>
                <div className="flex gap-4">
                  <p className="text-4xl font-['Noto_Serif'] text-dark-red font-bold tracking-wider">
                    {auctionById?.bids?.length}
                  </p>
                  <Envelope width="35" height="35"/>
                </div>
              </div>
              <div className="text-right">
                <p className="uppercase text-[10px] text-right">
                  Auction Type:
                </p>
                <p className="font-['Manrope'] text-[12px] text-dark-red uppercase tracking-widest font-bold mb-9 text-right">
                  {auctionById?.type}
                </p>
                <p className="uppercase text-[10px]">Status</p>
                <p className="font-['Manrope'] text-[12px] text-dark-red uppercase tracking-widest font-bold mb-9">
                  {auctionById?.status}
                </p>
                <div className="text-2xl font-['Noto_Serif'] text-[#1c1b1b]">
                  {auctionById?.product ? (
                    <TimeCountdown product={auctionById?.product} />
                  ) : (
                    "Loading timer..."
                  )}
                </div>
              </div>
            </div>
            {auctionById?.status !== "ACTIVE" ? (
              <></>
            ) : (
              <form onSubmit={handleSubmit(hdlOnSubmit)}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="font-['Manrope'] uppercase tracking-widest text-[10px] text-stone-500">
                      Your Bid
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="number"
                        placeholder={`Starting Price: ${auctionById.startingPrice}`}
                        {...register("amount")}
                        className="w-full bg-[#ebe7e7] border-none rounded-sm py-4 pl-8 pr-4 focus:ring-1 focus:ring-[#570000] focus:bg-white transition-all outline-none"
                      />
                      <div className="flex mx-2">
                        <button
                          onClick={() => hdlDecreaseAmountInput(1)}
                          type="button"
                          className="w-11 py-2 px-1 bg-gradient-to-r from-dark-red to-red text-white font-label rounded-l-xl shadow-lg hover:scale-[1.01] active:scale-95 transition-all text-xs font-bold disabled:bg-none disabled:bg-gray-300 disabled:text-gray-500 cursor-pointer"
                          disabled={
                            Number(watch("amount")) <=
                            auctionById?.startingPrice
                          }
                        >
                          -{auctionById?.minIncrement}
                        </button>
                        <button
                          onClick={() => hdlIncreaseAmountInput(1)}
                          type="button"
                          className="w-11 py-2 bg-gradient-to-r from-dark-red to-red text-white font-label rounded-r-xl shadow-lg hover:scale-[1.01] active:scale-95 transition-all text-xs font-bold disabled:bg-none disabled:bg-gray-300 disabled:text-gray-500 cursor-pointer"
                        >
                          +{auctionById?.minIncrement}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-[#570000] to-[#800000] text-white font-['Manrope'] uppercase tracking-widest py-4 rounded-sm shadow-lg hover:scale-[1.01] active:scale-95 transition-all text-xs font-bold disabled:bg-none disabled:bg-gray-300 disabled:text-gray-500 disabled:scale-100 disabled:cursor-not-allowed"
                    disabled={!isDirty || auctionById?.status !== "ACTIVE"}
                  >
                    Place Bid
                  </button>
                </div>
              </form>
            )}
          </div>
            {/* Only show the animation when a bid is in progress */}
            { bidStatus === "animating" &&
            <div className="flex justify-center items-center">
            <BidEnvelope ref={envelopeRef} amount={bidAmount} onComplete={() => setBidStatus("idle")}/>
            </div> 
            }
            {/* Show Your bid here */}
          {yourBids && yourBids.length > 0 && (
            <div className="bg-[#f6f3f2]  text-stone-50 p-8 rounded-lg relative max-h-[300px]">
              <div className="relative z-10 space-y-4">
                <h3 className="font-['Noto_Serif'] text-xl text-left font-bold text-red">
                  Your Bid
                </h3>
                <div className="flex flex-col gap-3 overflow-y-auto max-h-[200px]">
                  {yourBids
                    ? yourBids.map((e, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center"
                        >
                          <div className="flex items-center gap-4 pt-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-700">
                              <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI9pSLzM2C7nGW835doACIRA-VV2iSSbtmcyioc8l2PFHVZbOgPD8AU6e1rUgyTzQNNFmR0LyUqDyfi8DSQjf0Nsh4xGxSg_yzBXa5qQPPyWl5MO-9QOufbyZ8HNMh77Kyu3yfUONSmw-jkrKydj4Pxr8uaode4P22rnLg5KnHe-9pakz6ndCVwAdgmqT_t02R-kaPe-qQwUl2zkokkDHwDDUaBaZiam4feZxuNbHupTPVsui7CU1XJOf9FA4Ip7JZiyGwD6U1FVYe"
                                alt="Curator"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="text-left">
                              <p className="text-[12px] font-bold font-['Manrope'] text-primary uppercase tracking-widest">
                                {users.find((i) => e.bidderId === i.id)
                                  ?.username ?? "Unknown bidder"}
                              </p>
                              <p className="text-[14px] text-stone-500 uppercase tracking-widest">
                                {e.amount}
                              </p>
                            </div>
                          </div>
                          <div className="text-[12px] text-stone-500 tracking-widest">
                            {new Date(e?.createdAt).toLocaleTimeString()}
                          </div>
                        </div>
                      ))
                    : "Loading bid data..."}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SealedEnglish;
