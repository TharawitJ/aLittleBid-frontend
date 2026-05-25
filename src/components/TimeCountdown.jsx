import React, { useState, useEffect } from "react";
import useAuctionStore from "../stores/auction.store.js";

function TimeCountdown({ product }) {
  if (!product) return <span>Loading...</span>;

  // Use a single state to track the "now" timestamp
  //   const {allProducts}=props
  const { allAuction, getAllAuction } = useAuctionStore();
  const [now, setNow] = useState(() => Date.now());
  const filteredProduct = allAuction.filter(
    (item) => item.productId === product.id,
  );
  // const filteredProductByStatus = allAuction.filter(
  //   (item) => item.productId === "ACTIVE",
  // );
  // console.log("filteredProductByStatus", filteredProductByStatus);

  // const endTime = (filteredProduct) =>
  //   new Date(filteredProduct?.[0]?.endTime).getTime();
  // const startTime = (filteredProduct) =>
  //   new Date(filteredProduct?.[0]?.startTime).getTime();

  // Safe version using optional chaining and a fallback
  const getEndTimeMs = (products) => {
    const endTimeStr = products[0]?.endTime;
    return endTimeStr ? new Date(endTimeStr).getTime() : 0;
  };
  const getStartTimeMs = (products) => {
    const startTimeStr = products[0]?.startTime;
    return startTimeStr ? new Date(startTimeStr).getTime() : 0;
  };

  const targetEndTime = getEndTimeMs(filteredProduct);
  const targetStartTime = getStartTimeMs(filteredProduct);

  // console.log("diff", diff);
  const isEnded = now > targetEndTime;
  const isStart = targetStartTime > now;
  console.log("isStart", isStart);
  const hdlTime = () => {
    const endDiff = targetEndTime - now;
    const startDiff = targetStartTime - now;

    if (!isStart) {
      return (
        <div className="">
          Ends in <span className="font-bold">{formatTime(endDiff)}</span>
        </div>
      );
    } else if (isEnded) {
      return "AUCTION CLOSED";
    }
    return (
      <div>
        Starts in <span className="font-bold">{formatTime(startDiff)}</span>
      </div>
    );
  };

  // Simple formatting logic
  const formatTime = (ms) => {
    if (ms <= 0) return "Auction Ended";

    // 1. Calculate units
    const d = Math.floor(ms / 86400000);
    const h = Math.floor((ms % 86400000) / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);

    // 2. Helper to add leading zeros (e.g., "05" instead of "5")
    const pad = (num) => String(num).padStart(2, "0");

    // 3. Conditional Return
    if (d > 0) {
      return `${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
    }

    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  };

  useEffect(() => {
    getAllAuction();
    const interval = setInterval(() => {
      setNow(Date.now()); // Tick once per second for EVERYONE
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <div className="grid grid-cols-4 gap-4"> */}
      <div key={product.id} className="rounded-xl text-red-950">
        <p className="uppercase text-[12px]">Time</p>
        <div className="material-symbols-outlined text-[16px] text-primary">
          {hdlTime()}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default TimeCountdown;

