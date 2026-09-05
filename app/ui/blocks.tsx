import { useState, useEffect } from "react";
import { RAINBOW_COLORS } from "./colors";

const BLOCK_SIZE_VW = 2; // block width/height as a percentage of viewport width
const NUM_COLUMNS = Math.round(100 / BLOCK_SIZE_VW);

export default function Blocks() {
  const [windowsWidth, setWindowsWidth] = useState(0);

  const getBlocks = () => {
    const blockSize = windowsWidth * (BLOCK_SIZE_VW / 100);

    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);

    return Array.from(Array(nbOfBlocks).keys()).map((_, index) => {
      return (
        <div
          className="w-[100%]"
          style={{ height: `${BLOCK_SIZE_VW}vw` }}
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
          key={index}
        ></div>
      );
    });
  };

  let colorIndex = -1;
  const colorize = (el: any) => {
    colorIndex++;
    if (colorIndex >= RAINBOW_COLORS.length) {
      colorIndex = 0;
    }

    el.style.backgroundColor = RAINBOW_COLORS[colorIndex];
    window.localStorage.setItem("color", RAINBOW_COLORS[colorIndex]);

    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  useEffect(() => {
    // window is unavailable during SSR, so the real width is read after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWindowsWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex h-[100%] w-[100%] overflow-hidden fixed top-0 z-0">
      {windowsWidth > 0 &&
        Array.from(Array(NUM_COLUMNS).keys()).map((_, index) => {
          return (
            <div
              key={"b_" + index}
              style={{ width: `${BLOCK_SIZE_VW}vw` }}
            >
              {getBlocks()}
            </div>
          );
        })}
    </div>
  );
}
