import React, { useState, useEffect } from "react";

function TimeCountdown(product) {
  // Use a single state to track the "now" timestamp
  //   const {allProducts}=props
  const [now, setNow] = useState(() => Date.now());
  const endTime = (product) => new Date(product.endTime).getTime();
  const diff = endTime - now;

  console.log("timeout", product);

  // Simple formatting logic
  const formatTime = (ms) => {
    if (ms <= 0) return "Auction Ended";
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return `${h}h ${m}m ${s}s`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now()); // Tick once per second for EVERYONE
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <div className="grid grid-cols-4 gap-4"> */}
        <div key={product.id} className="rounded-xl">
          <div className="material-symbols-outlined text-[16px] text-primary">{formatTime(diff)}</div>
        </div>
      {/* </div> */}
    </>
  );
}

export default TimeCountdown;
