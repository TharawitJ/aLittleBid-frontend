import React, { useEffect } from "react";
import useAuctionStore from "../../stores/auction.store.js"
import useBidStore from "../../stores/bid.store.js"
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
        const auctionId = auction?.id; // Fallback to i.id if auction is not found
        // console.log(category.name)
        return (
          <div key={i.id} className="group cursor-pointer w-full">
            <div className="relative overflow-hidden rounded-3xl">
              {i.images?.[0]?.imageUrl && (
                <img
                  src={i.images[0].imageUrl}
                  alt="Product"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              {/* <img
                      src={`${i.images[0].imageUrl || `fallback.jpg`}`}
                      alt="Lot"
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                    /> */}
              <div className="absolute top-4 right-4 bg-[#fcf9f8]/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                <span className="font-['Manrope'] text-[9px] uppercase tracking-tighter">
                  Live Now
                </span>
              </div>
              <div className="bg-base-300 rounded-b-3xl px-5 py-3">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col min-w-[176px] min-h-[52px] grow-0">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-600 mb-1 block">
                      {category.name}
                    </span>
                    <h3 className="font-['Noto_Serif'] text-xl h-12">{i.name}</h3>
                  </div>
                  <div className="text-center min-w-[67px]">
                    <span className="font-headline uppercase text-[10px] text-stone-600">
                      Current Bid{" "}
                    </span>
                    <p className="font-['Noto_Serif'] text-lg text-red text-xl">
                      ${(1000 * i.id).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-stone-500">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      {/* <TimeCountdown product={i}/> */}
                    </span>
                  </div>
                  <button onClick={(() => hdlJoinClick(auctionId))} className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DisplayProducts;
