// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
export function roundToTwo(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}
