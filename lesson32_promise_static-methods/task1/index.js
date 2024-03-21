const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(77, 1000);
const asyncNum2 = getValueWithDelay(33, 2000);
const asyncNum3 = getValueWithDelay("23", 3000);

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) =>
  Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));

asyncSum(asyncNum1, asyncNum2, asyncNum3).then((result) => console.log(result));
