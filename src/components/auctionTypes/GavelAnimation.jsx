import {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";

const GAVEL_SRC = "/gavel.png";

const GavelAnimation = forwardRef(function GavelAnimation(
  { bidAmount, onComplete },
  ref,
) {
  const [phase, setPhase] = useState("idle");
  const [showBid, setShowBid] = useState(false);
  const [bidKey, setBidKey] = useState(0);
  const audioRef = useRef(null);
  const timers = useRef([]);

  const clearTimers = () => timers.current.forEach(clearTimeout);

  const triggerBid = () => {
    if (phase !== "idle") return;
    clearTimers();
    timers.current = [];

    if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }

    setPhase("windup");
    setShowBid(false);

    const t1 = setTimeout(() => {
      setPhase("strike");
      const t2 = setTimeout(() => {
        setBidKey((k) => k + 1);
        setShowBid(true);
      }, 60);
      const t3 = setTimeout(() => setPhase("recoil"), 220);
      const t4 = setTimeout(() => setPhase("idle"), 620);
      const t5 = setTimeout(() => setShowBid(false), 2200);
      timers.current.push(t2, t3, t4, t5);
    }, 550);
    
    // DONE END
    setTimeout(() => { onComplete?.(); }, 2350);

    timers.current.push(t1);
  };

  // Expose triggerBid to parent via ref
  useImperativeHandle(ref, () => ({ triggerBid }));

  useEffect(() => () => clearTimers(), []);

  const gavelRotation =
    phase === "windup"
      ? "-38deg"
      : phase === "strike"
        ? "12deg"
        : phase === "recoil"
          ? "-6deg"
          : "0deg";

  const gavelTransition =
    phase === "windup"
      ? "transform 0.30s cubic-bezier(0.4,0,0.2,1)"
      : phase === "strike"
        ? "transform 0.07s cubic-bezier(0.0,0,0.2,1)"
        : phase === "recoil"
          ? "transform 0.20s ease-out"
          : "transform 0.28s ease";

  const boardShake = phase === "strike" ? "translateX(3px)" : "translateX(0)";
  const boardTransition =
    phase === "strike" ? "transform 0.06s ease" : "transform 0.15s ease";

  return (
    <div style={{ position: "relative", width: 440, height: 320 }}>
      <audio ref={audioRef} src="/wood-hit.mp3" preload="auto" />

      {showBid && (
        <div
          key={bidKey}
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            zIndex: 30,
            fontFamily: "Georgia, serif",
            fontWeight: 900,
            fontSize: 30,
            color: "#FFD700",
            textShadow:
              "0 0 16px rgba(255,215,0,0.85), 0 2px 0 rgba(0,0,0,0.6)",
            WebkitTextStroke: "1px rgba(0,0,0,0.35)",
            animation: "bidPop 1.9s cubic-bezier(0.34,1.56,0.64,1) forwards",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {bidAmount} ฿
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: 52,
          right: 18,
          width: 160,
          height: 10,
          borderRadius: 3,
          background:
            "linear-gradient(180deg, #c8a86a 0%, #9b7a3a 40%, #7a5c1e 100%)",
          boxShadow:
            "0 3px 12px rgba(0,0,0,0.45), 0 1px 0 rgba(255,220,130,0.5) inset, 0 -1px 0 rgba(0,0,0,0.3) inset",
          transform: boardShake,
          transition: boardTransition,
          zIndex: 5,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 44,
          right: 22,
          width: 152,
          height: 6,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.18)",
          filter: "blur(3px)",
          zIndex: 4,
        }}
      />

      <img
        src={GAVEL_SRC}
        alt="Gavel"
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transformOrigin: "15% 85%",
          transform: "rotate(" + gavelRotation + ")",
          transition: gavelTransition,
          filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.45))",
          zIndex: 10,
        }}
      />

      <style>
        {
          "@keyframes bidPop { 0% { opacity:0; transform:translateY(18px) scale(0.55) } 28% { opacity:1; transform:translateY(-5px) scale(1.14) } 45% { transform:translateY(0) scale(1) } 78% { opacity:1; transform:translateY(0) scale(1) } 100% { opacity:0; transform:translateY(-22px) scale(0.92) } }"
        }
      </style>
    </div>
  );
});

export default GavelAnimation;
