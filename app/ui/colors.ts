import { interpolateRainbow } from "d3-scale-chromatic";

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
  colorRangeInfo: any
) {
  dataLength = dataLength || 10;
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
  return colorArray;
}

const colorRangeInfo = {
  colorStart: 0,
  colorEnd: 1,
  useEndAsStart: true,
};

export const RAINBOW_COLORS: string[] = interpolateColors(
  50,
  interpolateRainbow,
  colorRangeInfo
);
