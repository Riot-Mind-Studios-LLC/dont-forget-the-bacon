// import dependancies
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CheckCircle } from "lucide-react";
// import components

const FeatureToast = ({ message, onClear }) => {
  const toastRef = useRef(null);
  const timeoutRef = useRef(null);

  useGSAP(() => {
    if (!message) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    gsap.fromTo(
      toastRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );

    timeoutRef.current = setTimeout(() => {
      gsap.to(toastRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: onClear,
      });
    }, 2000);
  }, [message]);

  if (!message) return null;

  return (
    <div
      ref={toastRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
    >
      <CheckCircle size={16} />
      <span className="text-sm font-medium">{message}</span>
    </div>
  )
}

export default FeatureToast;