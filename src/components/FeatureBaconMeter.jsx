// import dependancies
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import components
import baconMarker from "../assets/bacon-marker.svg";

const ITEM_TARGET = 20;
const CAP_PERCENT = 90;

const FeatureBaconMeter = ({ groceryList }) => {
  const barRef = useRef(null);
  const markerRef = useRef(null);
  const messageRef = useRef(null);
  const prevPercentRef = useRef(0);

  const hasBacon = groceryList.some((item) => item.name === "Bacon");
  const nonBaconCount = groceryList.filter((item) => item.name !== "Bacon").length;

  const rawPercent = Math.min((nonBaconCount / ITEM_TARGET) * CAP_PERCENT, CAP_PERCENT);
  const fillPercent = hasBacon ? 100 : rawPercent;

  useGSAP(() => {
    const prevPercent = prevPercentRef.current;
    const wasAlreadyCapped = prevPercent >= CAP_PERCENT && !hasBacon;
    const stillCapped = fillPercent >= CAP_PERCENT && !hasBacon;
    const justHitFull = fillPercent === 100 && prevPercent !== 100;

    const tl = gsap.timeline();

    if (wasAlreadyCapped && stillCapped) {
      tl.to(barRef.current, { width: "80%", duration: 0.3, ease: "power2.out" })
        .to(barRef.current, { width: `${CAP_PERCENT}%`, duration: 0.5, ease: "power2.inOut" });
      tl.to(markerRef.current, { left: "80%", duration: 0.3, ease: "power2.out" }, 0)
        .to(markerRef.current, { left: `${CAP_PERCENT}%`, duration: 0.5, ease: "power2.inOut" });
    } else {
      tl.to(barRef.current, { width: `${fillPercent}%`, duration: 0.6, ease: "power2.inOut" });
      tl.to(markerRef.current, { left: `${fillPercent}%`, duration: 0.6, ease: "power2.inOut" }, 0);
    }

    if (justHitFull) {
      tl.to(markerRef.current, { rotate: 360, duration: 0.7, ease: "back.out(1.7)" });
      tl.fromTo(
        messageRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.3"
      );
      tl.to(messageRef.current, { opacity: 0, y: -10, duration: 0.4, delay: 1.5 });
    }

    prevPercentRef.current = fillPercent;
  }, [nonBaconCount, hasBacon]);

  return (
    <div className="relative mb-8 mt-4">
      <div className="flex items-center justify-between mb-4">
        <span className="font-display text-sm font-semibold text-black dark:text-white">Bacon Meter</span>
        <span className="text-sm font-semibold text-amber-800 dark:text-amber-400">
          {Math.round(fillPercent)}%
        </span>
      </div>
      <div className="relative mx-4">
        <div className="w-full h-4 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-amber-700 rounded-full"
            style={{ width: "0%" }}
          />
        </div>
        <img
          ref={markerRef}
          src={baconMarker}
          alt="Bacon marker"
          className="absolute top-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2"
          style={{ left: "0%" }}
        />
        <p
          ref={messageRef}
          className="absolute left-1/2 -top-7 -translate-x-1/2 text-sm font-bold text-amber-800 dark:text-amber-400 opacity-0 whitespace-nowrap"
        >
          🥓 🥓 🥓 You got the bacon! 🥓 🥓 🥓
        </p>
      </div>
    </div>
  )
}

export default FeatureBaconMeter;