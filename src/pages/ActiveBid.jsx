import React, { useEffect } from "react";
import DisplayProducts from "../components/productPage/DisplayProducts.jsx";
import useProductStore from "../stores/product.store.js";
import useAuctionStore from "../stores/auction.store.js";
import useBidStore from "../stores/bid.store.js";
import useUserStore from "../stores/user.store.js";
import { motion } from 'framer-motion';
import winner from '../assets/winner.jpeg'
import { NavLink } from "react-router";

function ActiveBid() {
  const allProducts = useProductStore((state) => state.allProducts);
  const user = useUserStore((state) => state.user);
  const allCategories = useProductStore((state) => state.allCategories);
  const getAllProducts = useProductStore((state) => state.getAllProducts);
  const getCategories = useProductStore((state) => state.getCategories);
  const clearAuctionById = useAuctionStore((state) => state.clearAuctionById);
  const clearProductById = useProductStore((state) => state.clearProductById);
  const bidData = useBidStore((state) => state.bidData);
  const allAuction = useAuctionStore((state) => state.allAuction);
  const getAllBid = useBidStore((state) => state.getAllBid);
  const getAllAuction = useAuctionStore((state) => state.getAllAuction);

  if (!bidData || !allAuction || !allProducts || !allCategories) {
    return <div>Loading...</div>;
  }

  // 2. Find all bids made by the current user
  const userBids = bidData.filter((bid) => bid.bidderId === user.id);
  // 3. Extract unique Auction IDs from those bids
  const userAuctionIds = [...new Set(userBids.map((bid) => bid.auctionId))];
  // 4. Filter allAuction to get the auctions the user participated in
  const filteredAuctions = allAuction.filter((auction) =>
    userAuctionIds.includes(auction.id),
  );
  // 5. Get the products associated with those filtered auctions
  const displayProducts = allProducts.filter((product) =>
    filteredAuctions.some((auction) => auction.productId === product.id),
  );

  console.log("displayProducts", !displayProducts);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  const hldNoActiveBid = () => {
    if (displayProducts.length === 0) {
      return <div>
      <section className="relative h-[80vh] min-h-[650px] flex items-center px-6 md:px-12 overflow-hidden">
        <motion.div 
          className="bg-home-bg absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            className="w-full h-full object-cover opacity-30"
            alt="expansive minimalist white gallery room"
            src={winner}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
        </motion.div>
        
        <div className="flex justify-center items-center gap-70 w-full">
          <motion.div 
            className="relative z-10 max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="font-['Noto_Serif'] text-5xl md:text-7xl text-[#1c1b1b] leading-tight">
              Big wins start with
            </motion.h1>
            <motion.h1 variants={itemVariants} className="font-['Noto_Serif'] text-5xl md:text-7xl bg-gradient-to-r from-[#570000] to-[#800000] bg-clip-text text-transparent leading-tight mb-6 text-center">
              A Little Bid
            </motion.h1>
            <motion.span variants={itemVariants} className="font-['Manrope'] uppercase tracking-[0.3em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 block text-xl font-bold">
              Place your bid before it's gone.
            </motion.span>
            <motion.div variants={itemVariants}>
              <NavLink to="/products">
              <p className="font-headline md:text-lg text-white text-center mt-20 bg-gradient-to-r from-primary to-secondary w-40 rounded-2xl mx-auto">
                View Products
              </p>
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
      // <div className="flex justify-center items-center align-middle h-full w-full grow min-h-[calc(100vh-360px)]"><h1>Let's take a littile bid</h1></div>;
    }
    return (
      <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-10">
        <DisplayProducts
          displayProducts={displayProducts}
          allCategories={allCategories}
        />
      </div>
    );
  };

  useEffect(() => {
    getAllBid();
    getCategories();
    getAllAuction();
    getAllProducts(); // <--- Crucial: The list will be empty without this
    clearAuctionById();
    clearProductById();
  }, []);

  return <>{hldNoActiveBid()}</>;
}

export default ActiveBid;
