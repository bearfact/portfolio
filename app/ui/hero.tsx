import { useState, useRef, useEffect } from "react";
import { RAINBOW_COLORS } from "./colors";
import useIsTouchDevice from "./use-is-touch-device";

export default function Hero() {
  const [color, setColor] = useState("#fff");
  let clearTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isTouch = useIsTouchDevice();

  const handleEnter = () => {
    const c = window.localStorage.getItem("color") || "#fff";
    setColor(c);
    if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
    clearTimerRef.current = setTimeout(() => {
      setColor("#fff");
    }, 3000);
  };

  useEffect(() => {
    if (!isTouch) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % RAINBOW_COLORS.length;
      setColor(RAINBOW_COLORS[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, [isTouch]);

  return (
    <div
      className="text-6xl font-bold leading-tight text-center md:text-8xl transition-colors duration-500 ease-in-out"
      style={{ color: color }}
      onMouseEnter={isTouch ? undefined : handleEnter}
    >
      <span className="block">DigDays</span>
    </div>
  );
}
