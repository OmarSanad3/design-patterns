import { describe, expect, it } from "vitest";
import { add } from "./math";

describe("add function", () => {
  it("works fine with positive numbers", () => {
    expect(add(10, 20)).toBe(30)
  });
});
