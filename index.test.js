import { getEvenNumbers } from "./index";

it("17 and 17", () => {
  expect(17).toEqual(17);
});
it("18 and 17", () => {
  expect(18).not.toEqual(17);
});

it("should get even numbers", () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 8]);
  expect(result).toEqual([2, 4, 8]);
});
