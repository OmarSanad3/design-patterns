import { getMyGenerator } from "./get-my-generator";
import { getMyIterator } from "./get-my-iterator";

export function range(start: number, end: number, step: number) {
  return {
    [Symbol.iterator]: getMyIterator(start, end, step),
  };
}

export function rangeV2(start: number, end: number, step: number) {
  return {
    [Symbol.iterator]: getMyGenerator(start, end, step),
  };
}
