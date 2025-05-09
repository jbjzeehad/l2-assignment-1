# TypeScript

**TypeScript** is a very powerful tool that provides type safety, scalability and maintainability for Javascript code. In this discussion, we will cover two important TypeScript topics:

## 1. The differences between interfaces and types

### • interfaces

`interfaces` are very useful for defining the structure of objects. They can be extended using the extends keyword, which is helpful in class based programming. Interfaces with the same name are automatically merged.

### Example

```ts
interface Student{
    name: string;
    age: number;
}

interface Student{
    id: string;
    batch: string;
}

const person : Student = {
    name: 'Rahim';
    age: 25;
    id: '2501';
    batch: '25';
};
```

### • types

`type` is used for more advanced type logic. It can be used with primitives, unions, intersections, tuples and more. types don't support declaration merging like interfaces.

### Example

```ts
type StudentLevel = "Beginner" | "Intermediate" | "Advanced";

type Season = {
  summer: string;
  winter: string;
};

type Year = Season & { rainy: string };
```

## 2. The differences between any, unknown and never

### • any

`any` useful for when the data type is not known. It disable all type checking and removes type safety, allowing any operation on the variable.

```ts
let language: any = "TypeScript";
language = 5;
language.toUpperCase(); //it may cause runtime issue
```

### • unknown

`unknown` is safer because this ensure type safety. We can not use or access properties or methods of an `unknown` type without checking its actual type.

```ts
let language: unknown = 'TypeScript';

if ( typeof language === 'string){
console.log(language.toUpperCase());
}
```

### • never

The `never` type represents valuse that never happened. It is used for functions that never return. Also it is used for checking conditional statements or `switch` cases.

```ts
function throwError(message: string): never {
  throw new Error(message);
}
function getValues(value: string | number): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return value.toString();

  const checkValues: never = value;
  return checkValues;
}
```
