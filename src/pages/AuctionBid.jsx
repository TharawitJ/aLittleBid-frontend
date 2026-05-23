import React, { useEffect, useState, useMemo } from "react";
import useProductStore from "../stores/product.store.js";
import useAuctionStore from "../stores/auction.store.js";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useBidStore from "../stores/bid.store.js";
import useUserStore from "../stores/user.store.js";
import TimeCountdown from "../components/TimeCountdown.jsx";
import {
  connectSocket,
  joinAuctionRoom,
  leaveAuctionRoom,
  placeBid,
  disconnectSocket,
} from "../socket/socketService.js";
import Swal from "sweetalert2";
import AuctionResultModal from "../components/AuctionResultModal.jsx";
import ProductImageSlide from "../components/productPage/ProductImageSlide.jsx";
import { BrownAuctionIcon } from "../icons/index.jsx";

const AuctionBid = () => {
  const  allCategories  = useProductStore((state) => state.allCategories);
  const  auctionById  = useAuctionStore((state) => state.auctionById);
  const  getAuctionById  = useAuctionStore((state) => state.getAuctionById);
  const  currentHighestBid  = useBidStore((state) => state.currentHighestBid);
  const  bids  = useBidStore((state) => state.bids);
  const  setBidHistory  = useBidStore((state) => state.setBidHistory);
  const  user  = useUserStore((state) => state.user);
  const  users  = useUserStore((state) => state.users);
  const  getAllUser  = useUserStore((state) => state.getAllUser);
  const [isLoading, setIsLoading] = useState(true);
  const usersList = Array.isArray(users) ? users : [];
  const { categoryId, description } = auctionById?.product || {};
  const { auctionId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    setValue,
    getValues,
    watch,
  } = useForm();

  const categoryName = useMemo(() => {
    const categoryId = auctionById?.product?.categoryId;
    return allCategories.find((cate) => categoryId === cate.id)?.name;
  }, [allCategories, auctionById?.product?.categoryId]);

  const { isDirty } = formState;

  const minRequiredPrice = currentHighestBid
    ? Number(currentHighestBid?.amount) + Number(auctionById?.minIncrement)
    : Number(auctionById?.startingPrice) + Number(auctionById?.minIncrement);

  const hdlOnSubmit = ({ amount }) => {
    if (!amount || Number(amount) <= 0 || Number(amount) < minRequiredPrice) {
      return alert(
        `Please enter a valid price: (Minimum Increment: ${auctionById?.minIncrement})`,
      );
    }
    placeBid(amount, auctionId);
    reset();
  };

  // const currentVal = watch("amount");

  const hdlIncreaseAmountInput = (times) => {
    const currentVal = getValues("amount");

    const baseValue = currentVal
      ? Number(currentVal)
      : currentHighestBid
        ? Number(currentHighestBid.amount)
        : Number(auctionById?.startingPrice);

    const increment = Number(auctionById?.minIncrement || 0);
    const newValue = baseValue + increment * times;

    setValue("amount", newValue, { shouldDirty: true });
    console.log(getValues("amount"));
  };

  const hdlDecreaseAmountInput = (times) => {
    const currentVal = getValues("amount");

    const baseValue = currentVal
      ? Number(currentVal)
      : currentHighestBid
        ? Number(currentHighestBid.amount)
        : Number(auctionById?.startingPrice);

    const increment = Number(auctionById?.minIncrement || 0);
    const newValue = baseValue - increment * times;

    setValue("amount", newValue, { shouldDirty: true });
    console.log(getValues("amount"));
  };

  useEffect(() => {
    if (!auctionById) {
      return;
    }
    connectSocket();
    joinAuctionRoom(auctionId);
    setIsLoading(false);

    // if (!auctionById || String(auctionById?.id) !== String(auctionId)) {
    //   console.warn(
    //     `[AuctionBid] auctionId mismatch: expected ${auctionId}, got ${auctionById?.id}. Join cancelled.`,
    //   );
    //   return;
    // }

    return () => {
      leaveAuctionRoom(auctionId);
      disconnectSocket();
    };
  }, [auctionId]);
  // auctionById

  // useEffect(() => {
  //   getAllUser();
  //   getAuctionById(auctionId);
  // }, [auctionId, getAllUser]);

  // 2. Optimized Data Fetching
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([getAllUser(), getAuctionById(auctionId)]);
      setIsLoading(false);
    };
    fetchData();
  }, [auctionId, getAllUser, getAuctionById]);

  useEffect(() => {
    if (!auctionById?.bids) return; // ← guard: wait until data is real
    setBidHistory(auctionById.bids);
  }, [auctionById?.id,setBidHistory]);

   return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] antialiased min-h-screen">
      {isLoading ? (
        <divc className="mx-auto w-full h-full text-8xl">...Loading</divc>
      ) : (
        <main className="pt-12 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Image & Details */}
            <div className="lg:col-span-7 space-y-16">
              <div className="relative group">
                <div className="aspect-[4/5] md:aspect-[3/2] overflow-hidden rounded-lg bg-[#f6f3f2]">
                  <ProductImageSlide images={auctionById?.product?.images} />
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="font-['Manrope'] uppercase tracking-widest text-xl text-[#570000] font-bold">
                    {categoryName}
                  </span>
                  <h1 className="text-5xl md:text-6xl font-['Noto_Serif'] text-[#1c1b1b] leading-tight">
                    {auctionById?.product?.name}
                  </h1>
                </div>

                <div className="max-w-none text-lg text-[#5a413d] leading-relaxed font-light space-y-4">
                  <p>{description}</p>
                </div>
              </div>
            </div>
            </div>

            {/* Right Column: Bidding Panel */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#f6f3f2] p-8 md:p-10 rounded-lg border border-[#e2bfb9]/10">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <p className="font-['Manrope'] text-[12px] text-black mb-2 uppercase tracking-widest">
                        Current Bid
                      </p>
                      <p className="text-4xl font-['Noto_Serif'] text-dark-red font-bold tracking-wider">
                        {currentHighestBid
                          ? currentHighestBid.amount
                          : auctionById?.startingPrice}
                      </p>
                      <span className="text-[14px] text-primary text-headline uppercase">
                        Highest Bidder:
                      </span>
                      <span className="text-[14px] text-secondary mt-3 text-headline uppercase font-bold mx-2">
                        {currentHighestBid
                          ? (usersList.find(
                              (u) => u.id === currentHighestBid?.bidderId,
                            )?.username ?? "Unknown bidder")
                          : "No Bidder Yet"}
                      </span>
                    </div>
                    <div className="text-right">
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
                              placeholder={`Minimum ${
                                currentHighestBid
                                  ? Number(currentHighestBid?.amount) +
                                    Number(auctionById?.minIncrement)
                                  : Number(auctionById?.startingPrice) +
                                    Number(auctionById?.minIncrement)
                              }`}
                              {...register("amount")}
                              className="w-full bg-[#ebe7e7] border-none rounded-sm py-4 pl-8 pr-4 focus:ring-1 focus:ring-[#570000] focus:bg-white transition-all outline-none"
                            />

                            <div className="flex mx-2">
                              <button
                                onClick={() => hdlDecreaseAmountInput(1)}
                                type="button"
                                className="w-11 py-2 px-1 bg-gradient-to-r from-dark-red to-red text-white font-label rounded-l-xl shadow-lg hover:scale-[1.01] active:scale-95 transition-all text-xs font-bold disabled:bg-none disabled:bg-gray-300 disabled:text-gray-500 cursor-pointer"
                                disabled={
                                  Number(watch("amount")) <= minRequiredPrice
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
                          disabled={
                            !isDirty || auctionById?.status !== "ACTIVE"
                          }
                        >
                          Place Bid
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                <div className="bg-[#f6f3f2]  text-stone-50 p-8 rounded-lg relative max-h-[300px]">
                  <div className="relative z-10 space-y-4">
                    <h3 className="font-['Noto_Serif'] text-2xl text-left font-bold text-red">
                      Live Bid
                    </h3>
                    <div className="flex flex-col gap-3 overflow-y-auto max-h-[200px]">
                      {bids
                        ? bids.map((e, i) => (
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
                                <div className="text-[12px] text-stone-500 tracking-widest">
                                  {new Date(e?.createdAt).toLocaleTimeString()}
                                </div>
                              </div>
                            </div>
                            ))
                          : "Loading bid data..."}
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <AuctionResultModal currentUserId={user?.id} auctionId={auctionId} />
        </main>
      )}
    </div>
  );
};

export default AuctionBid;