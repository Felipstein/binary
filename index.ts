const number = 232556;

const BIT_MASK = 0xff;

const firstByte = number >> 8 * 3
const secondByte = (number >> 8 * 2) & BIT_MASK
const thirdByte = (number >> 8 * 1) & BIT_MASK
const lastByte = number & BIT_MASK

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