import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import "./BidEnvelope.css";

const BidEnvelope = forwardRef(function BidEnvelope({ amount, onComplete }, ref) {
  const paperRef = useRef(null);
  const flapRef  = useRef(null);
  const envRef   = useRef(null);

  useImperativeHandle(ref, () => ({
    triggerAnimation() {
      const paper = paperRef.current;
      const flap  = flapRef.current;
      const env   = envRef.current;

      // Reset
      paper.style.transition = "none";
      paper.style.top = "0px";
      paper.style.opacity = "1";
      paper.style.transform = "translateX(-50%) scaleY(1)";
      flap.classList.remove("close");
      flap.classList.add("open");

      // 1. Fold paper
      setTimeout(() => {
        paper.style.transition = "transform 0.4s ease-in";
        paper.style.transform = "translateX(-50%) scaleY(0.4)";
      }, 200);

      // 2. Slide into envelope
      setTimeout(() => {
        paper.style.transition = "top 0.5s ease-in, opacity 0.3s ease-in 0.3s";
        paper.style.top = "110px";
        paper.style.opacity = "0";
      }, 700);

      // 3. Seal flap
      setTimeout(() => {
        flap.classList.remove("open");
        flap.classList.add("close");
      }, 1300);

      // 4. Shake envelope
      setTimeout(() => {
        let n = 0;
        const shake = setInterval(() => {
          n++;
          env.style.transform = `translateX(calc(-50% + ${n % 2 === 0 ? "-5px" : "5px"}))`;
          if (n >= 6) { clearInterval(shake); env.style.transform = "translateX(-50%)"; }
        }, 80);
      }, 1800);

      // 5. Done
      setTimeout(() => { onComplete?.(); }, 2300);
    }
  }));

  return (
    <div className="stage">
      <div className="paper" ref={paperRef}>
        <div className="paper-line" style={{ width: "70%" }} />
        <div className="paper-line" style={{ width: "90%" }} />
        <div className="paper-amt">{amount}฿</div>
        <div className="paper-line" style={{ width: "80%" }} />
        <div className="paper-line" style={{ width: "55%" }} />
      </div>

      <div className="env-wrap" ref={envRef}>
        <div className="env-body">
          <div className="env-tl" />
          <div className="env-tr" />
        </div>
        <div className="env-flap open" ref={flapRef} />
      </div>
    </div>
  );
});

export default BidEnvelope;