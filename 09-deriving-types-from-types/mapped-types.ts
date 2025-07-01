type Operations = {
  readonly add: (a: number, b: number) => number;
  readonly substract: (a: number, b: number) => number;
};

// type Results = {
//   add: number;
//   substract: number;
// };

// type Results<T> = {
//   [Key in keyof T]: number;
// };

// making all properties optional
// type Results<T> = {
//   [Key in keyof T]?: number;
// };

// making all properties required if optional in derieved type
// type Results<T> = {
//   [Key in keyof T]-?: number;
// };

// adding read-only
// type Results<T> = {
//     readonly [Key in keyof T]?: number;
//   };

// removing readonly
type Results<T> = {
  -readonly [Key in keyof T]?: number;
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  substract(a: number, b: number) {
    return a - b;
  },
};

let mathResults: Results<Operations> = {
  add: mathOperations.add(2, 4),
  substract: mathOperations.substract(2, 4),
};

// error as mathResults is readonly cannot be modified
// mathResults.add = 303;

mathResults.add = 102;
