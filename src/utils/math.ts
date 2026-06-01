export const add = (a: number, b: number): number => a + b;

export const isPrime = (x: number): boolean => {
  if (x < 2) return false;
  if (x === 2) return true;
  for (let i = 3; i * i <= x; i += 2) {
    if (x % i === 0) return false;
  }
  return true;
};
