export const maxFibonacci = (value) => {
  let prev = 0;
  let next = 1;
  for (let i = 0; i < value; i += 1) {
    if (prev > value) {
      return next - prev;
    }
    next = prev + next;
    prev = next - prev;
  }
  return next - prev;
};
console.log(maxFibonacci(12));
