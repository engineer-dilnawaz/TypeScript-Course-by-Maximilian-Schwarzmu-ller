let names: Array<string> = ["Max", "Anna"];

type DataStore<T> = {
  [key: string]: T;
};

const shop: DataStore<string | boolean> = {
  name: "Abc Shop",
  isOpen: false,
  isReg: true,
};

const person: DataStore<string | number | boolean> = {
  name: "John Doe",
  age: 34,
  isDeveloper: true,
};

function merge<T>(a: T, b: T) {
  return [a, b];
}

// const ids = merge<number>(1, 2); // can be written like below and type-script will infer
const ids = merge(1, 2);

// const stdNames = merge<string>("Abc", "XYS");// can be written like below and type-script will infer
const stdNames = merge("Abc", "XYS");

function merge1<T, U>(a: T, b: U) {
  return [a, b];
}

// const ids1 = merge1<number, string>(2, "12");
const ids1 = merge1(2, "12");

// const complex = merge1<
//   number[],
//   {
//     name: string;
//   }
// >([1, 23, 4], { name: "abc" });
const complex = merge1([1, 23, 4], { name: "abc" });

// Single Generics and Constraints
function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

// const ids = mergeObj(1,2); //Argument of type 'number' is not assignable to parameter of type 'object'.ts(2345)

const transformedObj = mergeObj({ name: "Dilnawaz" }, { role: "admin" });

// Multiple Generics and Constraints
function mergeObj1<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const transformedObj1 = mergeObj1({ name: "Dilnawaz" }, { role: "admin" });

// Generic Classes

class User<T> {
  constructor(public id: T) {}
}

const user1 = new User("123");
console.log(user1.id);

// Generic Interfaces

interface Employee<T> {
  id: T;
}

const obj: Employee<number> = {
  id: 101,
};
