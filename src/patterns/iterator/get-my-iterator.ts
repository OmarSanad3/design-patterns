export function getMyIterator(
  start: number,
  end: number,
  step: number,
): () => Iterator<number> {
  return function () {
    if (step === 0) throw new Error("Step cannot be zero!");

    if (start === end) {
      return {
        next: () => ({ value: 0, done: true }),
      };
    }

    if (start < end) {
      if (step < 0) {
        throw new Error("This may cause an infinite loop!");
      }

      return {
        next: function () {
          if (start >= end) return { value: 0, done: true };

          const ret = { value: start, done: false };
          start += step;
          return ret;
        },
      };
    }

    /* if (start > end) */
    if (step > 0) {
      throw new Error("This may cause an infinite loop!");
    }
    return {
      next: function () {
        if (start <= end) return { value: 0, done: true };

        const ret = { value: start, done: false };
        start += step;
        return ret;
      },
    };
  };
}
