import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useBidStore from "../stores/bid.store.js";
import { apiGetUserById } from "../api/apiMain.js";

export default function ExtendTimeReserveNotMetModalModal({}) {
  const { timeExtension } = useBidStore();
  const hasShownRef = useRef(false);


  // Fetch winner's username when a winner is set
  useEffect(() => {
    if (!timeExtension) return;

    if (!hasShownRef.current) {
      hasShownRef.current = true;
    }

  }, [timeExtension]);

  // Reset guard when winner is cleared
  useEffect(() => {
    if (!timeExtension) {
      hasShownRef.current = false;
    }
  }, [timeExtension]);

  if (!timeExtension || !hasShownRef.current) return null;


  return (
    <div className="px-8 pt-10 pb-8 text-center">
      <div className="flex justify-center mb-5">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          🔔
        </div>
      </div>

      <p
        className="text-xs font-semibold tracking-widest uppercase mb-2 text-black"
      >
        Auction ended
      </p>

      <h2
        className="text-3xl font-bold text-black mb-2"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Better luck next time
      </h2>

      <p className="text-sm mb-6 text-black">
        This auction has closed. You didn't place the winning bid.
      </p>

      {/* Winner callout */}
      <div
        className="rounded-xl px-5 py-4 mb-8"
        style={{
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-1 text-white"
        >
          Won by
        </p>
        {loadingUser ? (
          <div className="flex items-center justify-center gap-2 mt-1">
            <div
              className="w-4 h-4 rounded-full border-2 animate-spin"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                borderTopColor: "rgba(255,255,255,0.4)",
              }}
            />
            <span
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Loading...
            </span>
          </div>
        ) : (
          <p className="text-lg font-semibold text-white">
            {winnerUsername ?? "Another bidder"}
          </p>
        )}
      </div>

      <p className="text-xs mb-8 text-black">
        Any bids you placed have been released and no charge will be made to
        your account.
      </p>

      <button
        onClick={onClose}
        className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-95"
        style={{
          background: "rgba(122,0,0,0.8)",
          color: "rgba(255,255,255, 1)",
          border: "1px solid rgba(122,0,0,0.12)",
          cursor: "pointer",
        }}
      >
        Dismiss
      </button>
    </div>
  )
}
