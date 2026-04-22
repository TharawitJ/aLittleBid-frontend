import { io } from 'socket.io-client'
import React, { useEffect, useRef, useState } from 'react';
import useProductStore from "../stores/product.store.js"
import useAuctionStore from "../stores/auction.store.js"
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useSocketStore from '../stores/socket.store.js';

const ProductDetailBid = () => {
  const { productById, allCategories } = useProductStore()
  const { auctionById, getAuctionById, updateBid, currentBid } = useAuctionStore()
  const { socket, connect, joinAuction, leaveAuction } = useSocketStore()
  // console.log('allAuction', allAuction)
  console.log('socket', socket)
  const { id, categoryId, name, description, sellerId, updatedAt, images } = productById
  // console.log('productById', productById)
  // console.log('images',images)
  const { auctionId } = useParams()
  // console.log('auctionId', auctionId)
  const [timeLeft, setTimeLeft] = useState(0)
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    if (auctionId) {
      getAuctionById(auctionId)
    }
  },[])
  // console.log("allAuction", allAuction)
  // console.log("allCategories",allCategories)
  const filterCategoryName = allCategories.filter((cate) => categoryId === cate.id)
  // console.log("filterCategoryName",filterCategoryName)


  useEffect(() => {

    if (socket) {
      joinAuction(auctionId)
      alert("join successful")

      // return () => {
      //   leaveAuction(auctionId)
      // }
    }
  }, [auctionId])


  const hdlOnSubmit = ({amount}) => {
    console.log('amount', amount)
    // const bid = Number(amount);
    // console.log('bid', bid)
    if (!amount || amount <= 0) {
        return alert("Please enter a valid price");
    }

    if (socket) {
        socket.emit("send_bid", { auctionId, amount });
    } else {
        alert("Socket disconnected. Please try again.");
    }

  }

  useEffect(() => {

    if (socket) {
      socket.on("newest_bid", (newBid) => {
        updateBid(newBid)
      })

      return () => socket.off("bid_update");
    }


    // socket.on("auction:timer", (time) => {
    //   setTimeLeft(time.timeLeft)
    // })

    // const formatTime = (ms) => {
    //   if (ms <= 0) return { h: "00", m: "00", s: "00" };
    //   const seconds = Math.floor((ms / 1000) % 60);
    //   const minutes = Math.floor((ms / (1000 * 60)) % 60);
    //   const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    //   return {
    //     h: hours.toString().padStart(2, '0'),
    //     m: minutes.toString().padStart(2, '0'),
    //     s: seconds.toString().padStart(2, '0')
    //   };
    // };

    // const time = formatTime(timeLeft);

  }, [])


  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] antialiased min-h-screen">
      <main className="pt-12 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-7 space-y-16">
            <div className="relative group">
              <div className="aspect-[4/5] md:aspect-[3/2] overflow-hidden rounded-lg bg-[#f6f3f2]">
                <img
                  src={images[0].imageUrl}
                  alt="Artwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-6 right-6 bg-white/70 backdrop-blur-md p-3 rounded-full hover:bg-white transition-colors">
                <span className="material-symbols-outlined">fullscreen</span>
              </button>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <span className="font-['Manrope'] uppercase tracking-widest text-lg text-[#570000] font-bold">{filterCategoryName[0].name}</span>
                <h1 className="text-5xl md:text-6xl font-['Noto_Serif'] text-[#1c1b1b] leading-tight">{name}</h1>
                <p className="text-xl font-['Noto_Serif'] italic text-[#5e5e5e]">Attributed to Francesco Guardi (1712–1793)</p>
              </div>

              <div className="max-w-none text-lg text-[#5a413d] leading-relaxed font-light space-y-4">
                <p>{description}</p>
              </div>

              {/* <div className="space-y-0 divide-y divide-[#e2bfb9]/30 border-t border-b border-[#e2bfb9]/30">
                {['Provenance', 'Exhibition History', 'Shipping Information'].map((title) => (
                  <details key={title} className="group py-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="font-['Manrope'] uppercase tracking-widest text-xs font-semibold">{title}</span>
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="mt-4 text-sm text-[#5a413d] font-light">
                      Details about {title} would go here, maintaining the elegant editorial style.
                    </div>
                  </details>
                ))}
              </div> */}
            </div>
          </div>

          {/* Right Column: Bidding Panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="bg-[#f6f3f2] p-8 md:p-10 rounded-lg border border-[#e2bfb9]/10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <p className="font-['Manrope'] text-[10px] text-stone-500 mb-2 uppercase tracking-widest">Current Bid</p>
                    <p className="text-4xl font-['Noto_Serif'] text-[#570000] font-bold">{currentBid}</p>
                    <p className="text-[14px] text-primary mt-3 text-headline">Highest Bidder: Username</p>
                  </div>
                  <div className="text-right">
                    <p className="font-['Manrope'] text-[10px] text-stone-500 mb-2 uppercase tracking-widest">Time Left</p>
                    <p className="text-2xl font-['Noto_Serif'] text-[#1c1b1b]">2d : 14h : 08m</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit(hdlOnSubmit)}>
                <form>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="font-['Manrope'] uppercase tracking-widest text-[10px] text-stone-500">Your Bid</label>
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-stone-400">B</span>
                        <input
                          type="number"
                          placeholder=""
                          {...register('amount')}
                          className="w-full bg-[#ebe7e7] border-none rounded-sm py-4 pl-8 pr-4 focus:ring-1 focus:ring-[#570000] focus:bg-white transition-all outline-none" />
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#570000] to-[#800000] text-white font-['Manrope'] uppercase tracking-widest py-4 rounded-sm shadow-lg hover:scale-[1.01] active:scale-95 transition-all text-xs font-bold">
                      Place Bid
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-[#f6f3f2]  text-stone-50 p-8 rounded-lg relative max-h-[300px]">
                <div className="relative z-10 space-y-4">
                  <h3 className="font-['Noto_Serif'] text-xl text-left font-bold text-red">Live Bid</h3>
                  {/* <p className="text-xs text-stone-400 font-light leading-relaxed italic text-left">
                    "This specific canvas represents the pinnacle of 18th-century veduta painting. The 'ghostly' architecture is a signature mark of Guardi's later style."
                  </p> */}

                  <div className='flex flex-col gap-3 overflow-y-auto max-h-[200px]'>
                    <div className='flex justify-between items-center'>
                      <div className="flex items-center gap-4 pt-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-700">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI9pSLzM2C7nGW835doACIRA-VV2iSSbtmcyioc8l2PFHVZbOgPD8AU6e1rUgyTzQNNFmR0LyUqDyfi8DSQjf0Nsh4xGxSg_yzBXa5qQPPyWl5MO-9QOufbyZ8HNMh77Kyu3yfUONSmw-jkrKydj4Pxr8uaode4P22rnLg5KnHe-9pakz6ndCVwAdgmqT_t02R-kaPe-qQwUl2zkokkDHwDDUaBaZiam4feZxuNbHupTPVsui7CU1XJOf9FA4Ip7JZiyGwD6U1FVYe" alt="Curator" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                          <p className="text-[12px] font-bold font-['Manrope'] text-primary uppercase tracking-widest">Julian Vane</p>
                          <p className="text-[14px] text-stone-500 uppercase tracking-widest">10,000</p>
                        </div>
                      </div>
                      <div className='text-[12px] text-stone-500 tracking-widest'>Just now</div>
                    </div>

                    <div className='flex justify-between items-center'>
                      <div className="flex items-center gap-4 pt-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-700">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI9pSLzM2C7nGW835doACIRA-VV2iSSbtmcyioc8l2PFHVZbOgPD8AU6e1rUgyTzQNNFmR0LyUqDyfi8DSQjf0Nsh4xGxSg_yzBXa5qQPPyWl5MO-9QOufbyZ8HNMh77Kyu3yfUONSmw-jkrKydj4Pxr8uaode4P22rnLg5KnHe-9pakz6ndCVwAdgmqT_t02R-kaPe-qQwUl2zkokkDHwDDUaBaZiam4feZxuNbHupTPVsui7CU1XJOf9FA4Ip7JZiyGwD6U1FVYe" alt="Curator" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                          <p className="text-[12px] font-bold font-['Manrope'] text-primary uppercase tracking-widest">Julian Vane</p>
                          <p className="text-[14px] text-stone-500 uppercase tracking-widest">10,000</p>
                        </div>
                      </div>
                      <div className='text-[12px] text-stone-500 tracking-widest'>5 mins ago</div>
                    </div>

                    <div className='flex justify-between items-center'>
                      <div className="flex items-center gap-4 pt-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-700">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI9pSLzM2C7nGW835doACIRA-VV2iSSbtmcyioc8l2PFHVZbOgPD8AU6e1rUgyTzQNNFmR0LyUqDyfi8DSQjf0Nsh4xGxSg_yzBXa5qQPPyWl5MO-9QOufbyZ8HNMh77Kyu3yfUONSmw-jkrKydj4Pxr8uaode4P22rnLg5KnHe-9pakz6ndCVwAdgmqT_t02R-kaPe-qQwUl2zkokkDHwDDUaBaZiam4feZxuNbHupTPVsui7CU1XJOf9FA4Ip7JZiyGwD6U1FVYe" alt="Curator" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                          <p className="text-[12px] font-bold font-['Manrope'] text-primary uppercase tracking-widest">Julian Vane</p>
                          <p className="text-[14px] text-stone-500 uppercase tracking-widest">10,000</p>
                        </div>
                      </div>
                      <div className='text-[12px] text-stone-500 tracking-widest'>5 mins ago</div>
                    </div>

                    <div className='flex justify-between items-center'>
                      <div className="flex items-center gap-4 pt-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-700">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI9pSLzM2C7nGW835doACIRA-VV2iSSbtmcyioc8l2PFHVZbOgPD8AU6e1rUgyTzQNNFmR0LyUqDyfi8DSQjf0Nsh4xGxSg_yzBXa5qQPPyWl5MO-9QOufbyZ8HNMh77Kyu3yfUONSmw-jkrKydj4Pxr8uaode4P22rnLg5KnHe-9pakz6ndCVwAdgmqT_t02R-kaPe-qQwUl2zkokkDHwDDUaBaZiam4feZxuNbHupTPVsui7CU1XJOf9FA4Ip7JZiyGwD6U1FVYe" alt="Curator" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                          <p className="text-[12px] font-bold font-['Manrope'] text-primary uppercase tracking-widest">Julian Vane</p>
                          <p className="text-[14px] text-stone-500 uppercase tracking-widest">10,000</p>
                        </div>
                      </div>
                      <div className='text-[12px] text-stone-500 tracking-widest'>5 mins ago</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailBid;
