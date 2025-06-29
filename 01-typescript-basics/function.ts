function add(a: number, b: number): number {
  return a + b;
}

function log(message: string) {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);

  throw new Error(errorMessage);
}

function performJob(cb: (msg: string) => void) {
  // ....
  cb("abc");
}

performJob(log);

type User1 = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User1 = {
  name: "Dil",
  age: 32,
  greet() {
    return this.name;
  },
};
