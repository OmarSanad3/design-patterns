/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

type Constructor = { new (...args: any[]): {} };

function WithTimestamp(options: { createdAt?: boolean; updatedAt?: boolean }) {
  return function <T extends Constructor>(constructor: T) {
    return class extends constructor {
      createdAt = options.createdAt;
      updatedAt = options.updatedAt;
    };
  };
}

@WithTimestamp({ createdAt: true })
class Product {
  private title: string;
  constructor(title: string) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
}

const product = new Product("Car");

// console.log((product as any).createdAt);
console.log(product);
