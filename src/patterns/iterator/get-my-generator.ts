export function getMyGenerator(
  start: number,
  end: number,
  step: number,
): () => Generator<number> {
  return function* () {
    if (step === 0) throw new Error("Step cannot be zero!");

    if (start === end) {
      return;
    }

    if (start < end) {
      if (step < 0) {
        throw new Error("This may cause an infinite loop!");
      }

      while (true) {
        if (start >= end) return;

        const ret = start;
        start += step;
        yield ret;
      }
    }

    /* if (start > end) */
    if (step > 0) {
      throw new Error("This may cause an infinite loop!");
    }

    while (true) {
      if (start <= end) return;

      const ret = start;
      start += step;
      yield ret;
    }
  };
}
