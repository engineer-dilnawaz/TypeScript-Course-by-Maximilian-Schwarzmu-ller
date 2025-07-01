const appUser = {
  name: "Dilnawaz",
  age: 32,
  permissions: [
    {
      id: "101",
      title: "Peon",
      description: "A hardworking guy who knows how to get things done",
    },
  ],
};

// type AppUser = {
//   name: string;
//   age: number;
//   permissions: {
//     id: string;
//     title: string;
//     description: string;
//   }[];
// };

type AppUser = typeof appUser;

type Perms = AppUser["permissions"];
type Perm = Perms[number];

type Names = string[];
type Name = Names[number];
