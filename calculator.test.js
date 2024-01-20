import { calc } from "./calculator";

it("should get work calculator", () => {
  const result = calc(1);
  expect(result).toEqual();
  const result1 = calc("7 + 8");
  expect(result1).toEqual("7 + 8 = 15");
  const result2 = calc("7 - 8");
  expect(result2).toEqual("7 - 8 = -1");
  const result3 = calc("7 * 8");
  expect(result3).toEqual("7 * 8 = 56");
  const result4 = calc("21 / 7");
  expect(result4).toEqual("21 / 7 = 3");
});
