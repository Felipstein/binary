const number = 232556;

const firstByte = (number & (0xff << (8 * 3))) >> (8 * 3)
const secondByte = (number & (0xff << (8 * 2))) >> (8 * 2)
const thirdByte = (number & (0xff << (8 * 1))) >> (8 * 1)
const lastByte = (number & (0xff << (0))) >> 0

console.log({
  number: toBinary(number, 32),
  firstByte: toBinary(firstByte),
  secondByte: toBinary(secondByte),
  thirdByte: toBinary(thirdByte),
  lastByte: toBinary(lastByte),
});

function toBinary(value: number, length = 8): string {
  return value.toString(2).padStart(length, "0");
}