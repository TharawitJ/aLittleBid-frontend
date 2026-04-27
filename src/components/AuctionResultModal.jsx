import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useBidStore from "../stores/bid.store.js";

export default function AuctionResultModal({ currentUserId }) {
  const { winner, clearWinner } = useBidStore();
  const hasShownRef = useRef(false);
  const [winnerUsername, setWinnerUsername] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);

  // Fetch winner's username when a winner is set
  useEffect(() => {
    if (!winner) return;

    if (!hasShownRef.current) {
      hasShownRef.current = true;
    }

    // Only fetch if there's actually a winner (not a no-bid close)
    if (winner.winnerId) {
      setLoadingUser(true);
      axios
        .get(`/api/users/${winner.winnerId}`) // adjust endpoint to yours
        .then((res) => setWinnerUsername(res.data.username))
        .catch(() => setWinnerUsername(null))
        .finally(() => setLoadingUser(false));
    }
  }, [winner]);

  // Reset guard when winner is cleared
  useEffect(() => {
    if (!winner) {
      hasShownRef.current = false;
      setWinnerUsername(null);
    }
  }, [winner]);

  if (!winner || !hasShownRef.current) return null;

  const isWinner = winner.winnerId === currentUserId;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) clearWinner();
      }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: isWinner
            ? "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #312e81 100%)"
            : "linear-gradient(135deg, #0f172a 0%, #1c1917 100%)",
          border: isWinner
            ? "1px solid rgba(167,139,250,0.35)"
            : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {isWinner ? (
          <WinnerContent
            amount={winner.amount}
            bidId={winner.bidId}
            onClose={clearWinner}
          />
        ) : (
          <LoserContent
            winnerUsername={winnerUsername}
            loadingUser={loadingUser}
            onClose={clearWinner}
          />
        )}
      </div>
    </div>
  );
}

function WinnerContent({ amount, bidId, onClose }) {
  return (
    <div className="px-8 pt-10 pb-8 text-center">
      <div className="flex justify-center mb-5">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
          style={{
            background: "rgba(167,139,250,0.15)",
            border: "1px solid rgba(167,139,250,0.3)",
          }}
        >
          🏆
        </div>
      </div>

      <p
        className="text-xs font-semibold tracking-widest uppercase mb-2"
        style={{ color: "#a78bfa" }}
      >
        Congratulations
      </p>

      <h2
        className="text-3xl font-bold text-white mb-2"
        style={{ fontFamily: "Georgia, serif" }}
      >
        You won!
      </h2>

      <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
        Your bid was the highest and met the reserve price.
      </p>

      <div
        className="rounded-xl px-6 py-5 mb-3"
        style={{
          background: "rgba(167,139,250,0.1)",
          border: "1px solid rgba(167,139,250,0.2)",
        }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-1"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Winning bid
        </p>
        <p className="text-4xl font-bold" style={{ color: "#a78bfa" }}>
          {amount.toLocaleString()} <span className="text-xl">฿</span>
        </p>
      </div>

      <p className="text-xs mb-8" style={{ color: "rgba(255,255,255,0.2)" }}>
        Bid ref: {bidId}
      </p>

      <button
        onClick={onClose}
        className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Continue
      </button>
    </div>
  );
}

function LoserContent({ winnerUsername, loadingUser, onClose }) {
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
        className="text-xs font-semibold tracking-widest uppercase mb-2"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        Auction ended
      </p>

      <h2
        className="text-3xl font-bold text-white mb-2"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Better luck next time
      </h2>

      <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
        This auction has closed. You didn't place the winning bid.
      </p>

      {/* Winner callout */}
      <div
        className="rounded-xl px-5 py-4 mb-8"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-1"
          style={{ color: "rgba(255,255,255,0.25)" }}
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
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
              Loading...
            </span>
          </div>
        ) : (
          <p className="text-lg font-semibold text-white">
            {winnerUsername ?? "Another bidder"}
          </p>
        )}
      </div>

      <p className="text-xs mb-8" style={{ color: "rgba(255,255,255,0.25)" }}>
        Any bids you placed have been released and no charge will be made to your account.
      </p>

      <button
        onClick={onClose}
        className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-95"
        style={{
          background: "rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.65)",
          border: "1px solid rgba(255,255,255,0.12)",
          cursor: "pointer",
        }}
      >
        Dismiss
      </button>
    </div>
  );
}