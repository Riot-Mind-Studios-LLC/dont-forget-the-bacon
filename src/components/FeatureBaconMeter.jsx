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

  const hasBacon = groceryList.some((item) => item.name === "Bacon");
  const nonBaconCount = groceryList.filter((item) => item.name !== "Bacon").length;

  const rawPercent = Math.min((nonBaconCount / ITEM_TARGET) * CAP_PERCENT, CAP_PERCENT);
  const fillPercent = hasBacon ? 100 : rawPercent;

  useGSAP(() => {
    gsap.to(barRef.current, {
      width: `${fillPercent}%`,
      duration: 0.6,
      ease: "power2.inOut",
    });

    gsap.to(markerRef.current, {
      left: `${fillPercent}%`,
      duration: 0.6,
      ease: "power2.inOut",
    });
  }, [fillPercent]);

  return (
    <div className="relative mb-8 mt-4">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-semibold text-black dark:text-white">Bacon Meter</span>
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
      </div>
    </div>
  )
}

export default FeatureBaconMeter;