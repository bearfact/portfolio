import { useState, useRef } from "react";
export default function Hero() {
  const [color, setColor] = useState("#fff");
  let clearTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    const c = window.localStorage.getItem("color") || "#fff";
    setColor(c);
    if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
    clearTimerRef.current = setTimeout(() => {
      setColor("#fff");
    }, 3000);
  };

  return (
    <div
      className="text-6xl font-bold leading-tight text-center md:text-8xl transition-colors duration-500 ease-in-out"
      style={{ color: color }}
      onMouseEnter={handleEnter}
    >
      <span className="block">DigDays</span>
    </div>
  );
}
