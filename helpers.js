export function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

export const randomFloat = n => Math.random();

export function randNum(min = 0, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function roundToNearest(n, nearest) {
  return Math.round(n / nearest) * nearest;
}

export function randIndex(arr) {
  console.log(">>", arr[Math.floor(Math.random() * arr.length)]);
  return arr[Math.floor(Math.random() * arr.length)];
}

export default { randNum, randIndex, randomFloat, range, roundToNearest };
