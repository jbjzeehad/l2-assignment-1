function formatString(input: string, toUpper?: boolean): string {
  return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((filterItem) => filterItem.rating >= 4.0);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const emptyArray: T[] = [];
  for (const elements of arrays) {
    emptyArray.push(...elements);
  }
  return emptyArray;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(inputValue: string | number): number {
  if (typeof inputValue === "string") {
    return inputValue.length;
  } else {
    return inputValue * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let mostExpensiveProduct = products[0];
  for (const getProduct of products) {
    if (getProduct.price > mostExpensiveProduct.price) {
      mostExpensiveProduct = getProduct;
    }
  }
  return mostExpensiveProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
