export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return Math.min.apply(
    null,
    arr.map((num) => num * num)
  );
};
console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));
