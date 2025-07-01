type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;

let validKey: UserKeys;

// validKey = 'age'
// validKey = 'name'

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const value = obj[key];

  if (value === undefined || value === null) {
    throw new Error("Accessing undefined or null value");
  }

  return value;
}

const user = { name: "Dilnawaz", age: 19, gender: "male" };
getProp(user, "gender");

const data = { id: 1, isSorted: false, values: [1, 3, 50] };

const isSorted = getProp(data, "isSorted");
