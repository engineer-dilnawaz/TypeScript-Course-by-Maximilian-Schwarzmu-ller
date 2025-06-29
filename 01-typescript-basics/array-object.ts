let hobbies = ["Sports", "Cooking"];

// hobbies.push(1);

// let users: (string | number)[];
let users: Array<string | number>;

users = ["Hello", 12];
users = [123, "Bye"];

let possibleResults: [number, number]; // [1,-1]

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Dilnawaz",
  age: 27,
  hobbies: ["Cricket", "Cooking"],
  role: {
    description: "Admin",
    id: 101,
  },
};

let val: {} = [];

const someObj = {
  name: "Max",
  age: 34,
};

let data: Record<string, string | number>;

// data = "";

data = {
  ent1: 1,
  ent2: "some",
};
