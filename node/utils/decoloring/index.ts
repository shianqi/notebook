// 当color值大于128时, color值偏向255, 即#fff, 此时字体颜色应为#000
// 当color值小于128时, color值偏向0, 即#000, 此时字体颜色应为#fff
const decoloring: (rgbArr: [number, number, number]) => string = (rgbArr) => {
  return 0.213 * rgbArr[0] + 0.715 * rgbArr[1] + 0.072 * rgbArr[2] > 255 / 2 ? '#000': '#fff'
}

export default decoloring
