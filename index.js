const flatArray = (arr) => {
  const copyArr = arr.slice();
  const flatArr = copyArr.flat();
  flatArr.sort((a, b) => (a > b ? 1 : -1));
  return flatArr;
};
