/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

type Constructor = { new (...args: any[]): {} };

function WithTimestamp<T extends Constructor>(constructor: T) {
  return class extends constructor {
    createdAt = new Date().toISOString();
  };
}

@WithTimestamp
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

console.log(product);
