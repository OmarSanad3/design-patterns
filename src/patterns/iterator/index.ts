import { range, rangeV2 } from "./range";

console.log(
  "%cIterator Design Pattern!",
  "color: #815854; background-color: #F9EBDE; font-size: 20px; font-weight: bold;",
);

console.log(
  "%cTesting rangeV1!",
  "color: #815854; background-color: #F9EBDE; font-size: 20px; font-weight: bold;",
);

for (const x of range(10, -1, -5)) {
  console.log(x);
}

console.log(
  "%cTesting rangeV2!",
  "color: #815854; background-color: #F9EBDE; font-size: 20px; font-weight: bold;",
);
console.log(...rangeV2(10, -1, -5));
