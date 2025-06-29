enum Role {
  admin,
  editor,
  guest,
}

let userRole: Role = 0; //0=>admin, 1=>editor, 2=>guest,

// ...

userRole = Role.guest;

let userRole1: "admin" | "editor" | "guest" = "editor";

userRole1 = "guest";

let results: [1 | -1, 1 | -1]; // [1,-1]

results = [1, -1];

type UserRole = "admin" | "editor" | "guest" | "reader";

function getName(role: UserRole) {}

type User = {
  name: string;
  age: number;
  role: UserRole;
  permission: string[];
};
