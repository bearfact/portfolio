import { useState, useEffect } from "react";
import { interpolateTurbo } from "d3-scale-chromatic";

export default function Blocks() {
  const [windowsWidth, setWindowsWidth] = useState(0);

  function calculatePoint(
    i: number,
    intervalSize: number,
    colorRangeInfo: { colorStart: any; colorEnd: any; useEndAsStart: any }
  ) {
    var { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
    return useEndAsStart
      ? colorEnd - i * intervalSize
      : colorStart + i * intervalSize;
  }

  function interpolateColors(
    dataLength: number | undefined,
    colorScale: (arg0: any) => any,
    colorRangeInfo: { colorStart: any; colorEnd: any; useEndAsStart?: any }
  ) {
    dataLength = dataLength * 2;
    var { colorStart, colorEnd } = colorRangeInfo;
    var colorRange = colorEnd - colorStart;
    var intervalSize = colorRange / dataLength;
    var i, colorPoint;
    var colorArray = [];

    for (i = 0; i < dataLength; i++) {
      colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
      colorArray.push(colorScale(colorPoint));
    }

    const firstThird = colorArray.slice(0, dataLength / 3);
    const lastThird = colorArray.slice((dataLength / 3) * 2, dataLength);

    colorArray = [...firstThird, ...lastThird];
    return colorArray;
  }

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;

    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);

    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          className="h-[5vw] w-[100%] "
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
          key={index}
        ></div>
      );
    });
  };

  const colorRangeInfo = {
    colorStart: 0,
    colorEnd: 1,
    useEndAsStart: true,
  };

  let COLORS = interpolateColors(30, interpolateTurbo, colorRangeInfo);
  COLORS = [...COLORS, ...COLORS.reverse()];

  let colorIndex = -1;
  const colorize = (el: any) => {
    colorIndex++;
    if (colorIndex >= COLORS.length) {
      colorIndex = 0;
    }

    el.style.backgroundColor = COLORS[colorIndex];
    window.localStorage.setItem("color", COLORS[colorIndex]);

    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex h-[100%] w-[100%] overflow-hidden fixed top-0 z-0">
      {windowsWidth > 0 &&
        Array.from(Array(20).keys()).map((_, index) => {
          return (
            <div key={"b_" + index} className="w-[5vw]">
              {getBlocks()}
            </div>
          );
        })}
    </div>
  );
}
