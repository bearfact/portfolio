import { useState, useRef } from "react";
export default function Hero() {
  const [colors, setColors] = useState(["#fff"]);
  let clearTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    const c = window.localStorage.getItem("color") || "#fff";
    setColors([...colors, c]);
    if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
    clearTimerRef.current = setTimeout(() => {
      // unwind colors
      setInterval(() => {
        if (colors.length === 1) return;
        colors.pop();
        setColors([...colors]);
      }, 700);
    }, 4000);
  };

  return (
    <div
      className="text-6xl font-bold leading-tight text-center md:text-8xl transition-colors duration-500 ease-in-out"
      style={{ color: colors[colors.length - 1] }}
      onMouseEnter={handleEnter}
    >
      <span className="block">DigDays</span>
    </div>
  );
}
