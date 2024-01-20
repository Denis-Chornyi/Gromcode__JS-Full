import getSum, { getOddNumbers, getSquaredArray } from "./calculator";

it("should get squared numbers", () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it("should get odd numbers", () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it("should get sum numbers", () => {
  const result = getSum(7, 8);
  expect(result).toEqual(15);
});
