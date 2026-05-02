/* eslint-disable @typescript-eslint/no-explicit-any */

// import "reflect-metadata";

const memo = new Map<number, boolean>();

function Memoize() {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value as (_x: number) => boolean;
    descriptor.value = function (x: number) {
      let answer = memo.get(x);
      if (answer !== undefined) {
        return answer;
      }

      answer = originalMethod(x);
      memo.set(x, answer);

      return answer;
    };

    return descriptor;
  };
}

class MyMath {
  @Memoize()
  static isPrime(x: number): boolean {
    if (x < 2) return false;
    if (x === 2) return true;
    for (let i = 3; i * i <= x; i += 2) {
      if (x % i === 0) return false;
    }
    return true;
  }

  static test() {}
}

console.log(MyMath.isPrime(50));
console.log(MyMath.isPrime(50));
console.log(MyMath.isPrime(50));
