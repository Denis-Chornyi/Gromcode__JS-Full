import { reverseArray, withdraw, getAdults } from "./calculator";

it("should get reverse array", () => {
  const result1 = reverseArray([1, 2, 3, 4, 5]);
  expect(result1).toEqual([5, 4, 3, 2, 1]);
  const result2 = reverseArray([1, 2, 3]);
  expect(result2).toEqual([3, 2, 1]);
  const result3 = reverseArray([777, 888, 555]);
  expect(result3).toEqual([555, 888, 777]);
});

it("should get the rest", () => {
  const result1 = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result1).toEqual(37);
  const result2 = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(result2).toEqual(-1);
  const result3 = withdraw(
    ["Ann", "John", "User"],
    [1400, 87, -6],
    "Ann",
    1200
  );
  expect(result3).toEqual(200);
});

it("should get all adults", () => {
  const result1 = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result1).toEqual({ "John Doe": 19, Bob: 18 });
  const result2 = getAdults({ Ann: 56, Andrey: 7 });
  expect(result2).toEqual({ Ann: 56 });
  const result3 = getAdults({ "John Doe": 19, Tom: 17, Ann: 56 });
  expect(result3).toEqual({ "John Doe": 19, Ann: 56 });
});
