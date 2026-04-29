import React, { useEffect, useRef, useState, useCallback } from "react";
import { NavLink, useParams } from "react-router";
import WelcomeGuest from "../components/homePage/WelcomeGuest";
import WelcomeUser from "../components/homePage/WelcomeUser";
import useUserStore from "../stores/user.store.js";
import useProductStore from "../stores/product.store.js";
import useAuctionStore from "../stores/auction.store.js";
import AuctionCard from "../components/AuctionCard.jsx";
import useSocketStore from "../stores/socket.store.js";
import TimeCountdown from "../components/TimeCountdown.jsx";

const HomePage = () => {
  const { user, getUserById } = useUserStore();
  const { getAllAuction, getPopularAuction, popularAuction } =
    useAuctionStore();
  const { getAllProducts, getCategories } = useProductStore();
  const { connect } = useSocketStore();
  const { auctionId } = useParams();
  const [timeLeft, setTimeLeft] = useState(0);
  const [lots, setLots] = useState();
  console.log('lots', lots)
  const [isLoading, setIsLoading] = useState(true);

  // --- Smaller Lots Carousel ---
  const carouselRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // const filterForLots=()=>{
  //   const filter = popularAuction.filter((p)=>{})
  // }

  const scrollToIndex = useCallback((index) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.children[index];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    setCarouselIndex(index);
  }, []);

  const handlePrev = () => scrollToIndex(Math.max(carouselIndex - 1, 0));
  const handleNext = () =>
    scrollToIndex(Math.min(carouselIndex + 1, lots.length - 1));

  // Sync dot with scroll position
  const handleCarouselScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.children[0]?.offsetWidth || 1;
    const idx = Math.round(el.scrollLeft / (cardWidth + 24)); // 24 = gap-6
    setCarouselIndex(idx);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getPopularAuction();
      setIsLoading(false);
      setLots(popularAuction);
      console.log("lots", lots);
    };

    fetchData();
    // DO NOT put popularAuction here
  }, [getPopularAuction]);

  useEffect(() => {
    getUserById(user?.id);
    getAllAuction();
    getAllProducts();
    getCategories();
  }, [lots]);

  const userCheck = () => {
    // console.log("userCheck",user)
    if (!user) {
      return <WelcomeGuest />;
    }
    return <WelcomeUser />;
  };

  // ting remove
  // useEffect(() => {
  //   connect();
  // }, []);

  const hdlJoinClick = (id) => {
    try {
      if (!id) return alert("no auction");
      navigate(`/auction_bid/${id}`);
      // getProductsById(auctionById.productId);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      <main className="">
        {userCheck()}
        {/* <WelcomeUser/> */}

        {/* Ongoing Auctions (Masonry Style Grid) */}
        <section id="auctions" className="px-6 md:px-12 py-16 bg-surface">
          <div className="flex items-center">
            <div className="font-headline text-4xl text-red my-16 mr-6">
              Populars
            </div>
            <div className="h-[1px] flex-grow bg-stone-200"></div>
          </div>
          {isLoading ? (
            <div>...Loading</div>
          ) : (
            <main className=" pb-20 px-12 max-w-[1920px] mx-auto">
              {/* Hero Section & Sidebar Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 mb-24 w-full px-4 md:px-8">
                {/* Main Hero */}
                <div className="lg:col-span-5 group cursor-pointer relative overflow-hidden rounded-2xl shadow-xl h-full md:h-full">
                  <div className="relative w-full h-full">
                    <img
                      src={`${lots?.[0].product.images?.[0]?.imageUrl}` || "https://unsplash.com/photos/space-needle-landmark-against-a-clear-blue-sky-_FIJZSbYphE"}
                      alt="Luxury watch detail"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Editorial Glass Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/70 backdrop-blur-[24px] flex flex-col md:flex-row justify-between items-end md:items-center">
                    <div className="max-w-xl text-left mx-2">
                      <h1 className="font-['Noto_Serif'] text-5xl md:text-2xl text-black mb-4 leading-tight">
                        {lots?.[0].product.name}
                      </h1>
                      <p className="font-['Manrope'] text-dark-red text-bold text-3xl max-w-md">
                        ฿ {lots?.[0].bids?.[0]?.amount}
                      </p>
                    </div>
                    <div className="mt-8 md:mt-0 flex flex-col items-center">
                      <div className="flex gap-4 mb-6">
                        <TimeCountdown product={lots?.[0].product} />
                      </div>
                      <button className="bg-gradient-to-r from-[#570000] to-[#800000] text-white px-10 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">
                        Join Auction
                      </button>
                    </div>
                  </div>
                </div>

                {/* Smaller Lots Column — Arrow Carousel */}
                <div className="lg:col-span-7 relative flex flex-col gap-4">
                  {/* Track */}
                  <div
                    ref={carouselRef}
                    onScroll={handleCarouselScroll}
                    className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory h-full"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {lots?.slice(1).map((lot, idx) => (
                      <div className="max-w-[280px] md:min-w-[320px] flex-shrink-0 snap-start">
                        <AuctionCard
                          index={idx}
                          img={lot.product.images?.[0]?.imageUrl || "https://unsplash.com/photos/space-needle-landmark-against-a-clear-blue-sky-_FIJZSbYphE"}
                          title={lot.product.name}
                          description={lot.product.description}
                          badge="Live"
                          price={lot.bids?.[0]?.amount}
                          timeLeft={<TimeCountdown product={lot.product} />}
                          aspectRatio="aspect-[4/5]"
                          onJoin={() => hdlJoinClick(lot.bids.auctionId)}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Controls: Arrows + Dots */}
                  <div className="flex items-center justify-between mt-2 px-1">
                    {/* Dots */}
                    <div className="flex items-center gap-2">
                      {lots.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => scrollToIndex(idx)}
                          className={`rounded-full transition-all duration-300 ${carouselIndex === idx
                              ? "w-6 h-2 bg-[#570000]"
                              : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                            }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Arrow Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        disabled={carouselIndex === 0}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${carouselIndex === 0
                            ? "border-stone-200 text-stone-300 cursor-not-allowed"
                            : "border-[#570000] text-[#570000] hover:bg-red hover:text-white active:scale-95"
                          }`}
                        aria-label="Previous"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          <img
                            src="https://www.svgrepo.com/show/382820/pointer-left.svg"
                            alt="arrow back"
                            className="w-8 hover:w-12"
                          />
                        </span>
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={carouselIndex === lots.length - 1}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${carouselIndex === lots.length - 1
                            ? "border-stone-200 text-stone-300 cursor-not-allowed"
                            : "border-[#570000] text-[#570000] hover:bg-red hover:text-white active:scale-95"
                          }`}
                        aria-label="Next"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          <img
                            src="https://www.svgrepo.com/show/382819/pointer-right.svg"
                            alt="arrow forward"
                            className="w-8 hover:w-12"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          )}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
