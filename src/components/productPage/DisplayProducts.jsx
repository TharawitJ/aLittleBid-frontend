import React, { useEffect } from "react";
import useAuctionStore from "../../stores/auction.store.js"
import useBidStore from "../../stores/bid.store.js"
import TimeCountdown from "../TimeCountdown.jsx"
import AuctionCard from "../AuctionCard.jsx"
import { useNavigate } from "react-router";

function DisplayProducts({ displayProducts, allCategories }) {
  const navigate = useNavigate();
  const auctionById = useAuctionStore(state => state.auctionById)
  const getAuctionById = useAuctionStore((state) => state.getAuctionById)
  const allAuction = useAuctionStore((state) => state.allAuction)
  console.log('allAuction', allAuction)
  const getAllAuction = useAuctionStore((state) => state.getAllAuction)
  const { bidData, getAllBid } = useBidStore()

  const hdlJoinClick = (id) => {
    try {
      if (!id) return alert("no auction")
      getAuctionById(id)
      navigate(`/auction_bid/${id}`)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllBid()
    getAllAuction()
    // console.log('bidData', bidData)
  }, [])

  return (
    <>
      {displayProducts.map((i, idx) => {
        const category = allCategories.find((cat) => cat.id === i.categoryId);
        const auction = allAuction?.find((a) => a.productId === i.id);
        console.log('auction', auction)
        const auctionId = auction?.id;
        return (
          <AuctionCard
            key={i.id}
            index={idx}
            img={i.images?.[0]?.imageUrl}
            title={i.name}
            cat={category?.name}
            description={i.description}
            badge="Live"
            price={`$${(1000 * i.id).toLocaleString()}`}
            timeLeft={<TimeCountdown product={i} />}
            auctionDetail={auction}
            onJoin={() => hdlJoinClick(auctionId)}
          />
        );
      })}
    </>
  );
}

export default DisplayProducts;
