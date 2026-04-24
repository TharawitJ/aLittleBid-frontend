import React, { useEffect } from "react";
import useAuctionStore from "../../stores/auction.store.js"
import useBidStore from "../../stores/bid.store.js"
import TimeCountdown from "../TimeCountdown.jsx"
import { useNavigate } from "react-router";

function DisplayProducts({ displayProducts, allCategories }) {
  const navigate = useNavigate();
  const auctionById = useAuctionStore(state => state.auctionById)
  const getAuctionById = useAuctionStore((state) => state.getAuctionById)
  const allAuction = useAuctionStore((state) => state.allAuction)
  console.log('allAuction', allAuction)
  const getAllAuction = useAuctionStore((state) => state.getAllAuction)
  const { bidData, getAllBid, getBidById } = useBidStore()
  console.log('auctionById', auctionById)

  const hdlJoinClick =  (id) => {
    try {
      if(!id) {
        return alert("no auction")
      }
      // console.log('id', id)
     getAuctionById(id)
      navigate(`/auction_bid/${id}`)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllBid()
    getAllAuction()
    // getBidById()
    console.log('bidData', bidData)
  }, [])

  return (
    <>
      {displayProducts.map((i) => {
        const category = allCategories.find((cat) => cat.id === i.categoryId);
        const auction = allAuction?.find((a) => a.productId === i.id);
        console.log('auction', auction)
        const auctionId = auction?.id;
        return (
          <div key={i.id} className="group cursor-pointer w-full flex flex-col">

            {/* Image wrapper */}
            <div className="relative overflow-hidden rounded-2xl">
              {i.images?.[0]?.imageUrl && (
                <img
                  src={i.images[0].imageUrl}
                  alt="Product"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-108"
                />
              )}

              {/* Gradient overlay — always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Live badge */}
              <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse block" />
                <span className="font-['Manrope'] text-[9px] uppercase tracking-widest text-[#570000] font-bold">Live</span>
              </div>

              {/* Hover reveal — bid info sliding up from bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/60 text-[10px] uppercase tracking-widest mb-0.5">Current Bid</p>
                    <p className="text-white font-['Noto_Serif'] text-2xl font-bold">
                      ${(1000 * i.id).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => hdlJoinClick(auctionId)}
                    className="bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-2.5 rounded-sm font-['Manrope'] text-[11px] uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/30"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Info below image */}
            <div className="mt-4 px-1 flex justify-between items-start gap-2">
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-1 block">
                  {category?.name}
                </span>
                <h3 className="font-['Noto_Serif'] text-lg leading-snug text-[#1c1b1b] truncate">
                  {i.name}
                </h3>
                <span className="text-[11px] text-[#570000] mt-1.5 font-['Manrope'] tracking-wide">
                  <TimeCountdown product={i} />
                </span>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[9px] uppercase tracking-widest text-stone-400 mb-0.5">Current Bid</p>
                <p className="font-['Noto_Serif'] text-lg text-[#800000] font-semibold">
                  ${(1000 * i.id).toLocaleString()}
                </p>
                 <button
                    onClick={() => hdlJoinClick(auctionId)}
                    className="bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-2.5 rounded-sm font-['Manrope'] text-[11px] uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/30"
                  >
                    Join
                  </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DisplayProducts;
