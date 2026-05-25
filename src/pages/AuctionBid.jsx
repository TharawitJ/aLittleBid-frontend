import React, { useEffect, useRef, useState } from "react";
import useProductStore from "../stores/product.store.js";
import useAuctionStore from "../stores/auction.store.js";
import { useNavigate, useParams } from "react-router";
import useBidStore from "../stores/bid.store.js";
import useUserStore from "../stores/user.store.js";
import {
  joinAuctionRoom,
  leaveAuctionRoom,
  placeBid
} from "../socket/socketService.js";
import Swal from "sweetalert2";
import AuctionResultModal from "../components/AuctionResultModal.jsx";
import ProductImageSlide from "../components/productPage/ProductImageSlide.jsx";
import { BrownAuctionIcon } from "../icons/index.jsx";
import { mainButtonColor } from "../common/mainColor.js";
import EnglishBids from "../components/auctionTypes/EnglishBids.jsx";
import SealedEnglish from "../components/auctionTypes/SealedEnglish.jsx";

const AuctionBid = () => {
  const navigate = useNavigate();

  const { productById, allCategories, getProductsById } = useProductStore();
  const { auctionById, getAuctionById, setCurrentPrice, currentPrice } =
    useAuctionStore();
  // console.log('auctionById.product.images', auctionById?.product.images)
  const {
    newBid,
    bidData,
    setNewBid,
    getAllBid,
    currentHighestBid,
    bids,
    setBidHistory,
    clearWinner
  } = useBidStore();
  const { user, users, getAllUser } = useUserStore();
  // const usersList = Array.isArray(users) ? users : [];
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const { id, categoryId, name, description, sellerId, updatedAt, images } =
    auctionById?.product || {};
  const { auctionId } = useParams();
  const filterCategoryName = allCategories.filter(
    (cate) => categoryId === cate.id,
  );

  useEffect(() => {
    console.log("use effect is running");
    if (auctionId) {
      joinAuctionRoom(auctionId);
      setIsLoading(false);
      console.log("auctionId", auctionId);
    }

    return () => {
      leaveAuctionRoom(auctionId);
      clearWinner();
    };
  }, [auctionId]);

  // useEffect(() => {
  //   getAllUser();
  //   getAuctionById(auctionId);
  // }, [auctionId, getAllUser]);

  // 2. Optimized Data Fetching
  useEffect(() => {
    const fetchData = async () => {
      await getAllUser();
      await getAuctionById(auctionId);
      setIsFetching(false); 
    }
    fetchData();
  }, [auctionId, getAllUser]);

  useEffect(() => {
    if (isFetching) return; // guard

    if (!auctionById) {
    Swal.fire({
      icon: "error",
      title: "Sorry...",
      text: "This auction does not exist.",
      confirmButtonText: "OK",
      confirmButtonColor: mainButtonColor
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/products'); 
    }
    });
  }
  
  if (!auctionById?.bids) return; // ← guard: wait until data is real
  console.log("useeffect at auction bid page", auctionById);
  setBidHistory(auctionById.bids);
  }, [isFetching, auctionById]);

   return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] antialiased min-h-screen">
      {isLoading ? (
        <div className="mx-auto w-full h-full text-8xl">...Loading</div>
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
                  <span className="font-['Manrope'] uppercase tracking-widest text-lg text-[#570000] font-bold">
                    {filterCategoryName[0]?.name}
                  </span>
                  <h1 className="text-5xl md:text-6xl font-['Noto_Serif'] text-[#1c1b1b] leading-tight">
                    {auctionById?.product?.name}
                  </h1>
                  {/* <p className="text-xl font-['Noto_Serif'] italic text-[#5e5e5e]">
                    {auctionById?.product?.description}
                  </p> */}
                </div>

                <div className="max-w-none text-lg text-[#5a413d] leading-relaxed font-light space-y-4">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
          {auctionById && 
          auctionById.type === 'ENGLISH' ? <EnglishBids currentHighestBid={currentHighestBid} auctionById={auctionById} bids={bids} auctionId={auctionId} users={users}/> : <SealedEnglish auctionById={auctionById} auctionId={auctionId} users={users}/>}
          <AuctionResultModal currentUserId={user?.id} auctionId={auctionId} />
          </main>
      )}
    </div>
  );
};

export default AuctionBid;