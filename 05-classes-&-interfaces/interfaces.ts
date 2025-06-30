interface Authenticable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticableAdmin extends Authenticable {
  role: "admin" | "superadmin";
}

let user: Authenticable;

user = {
  email: "test@example.com",
  password: "abc",

  login() {
    console.log("Logging in");
  },

  logout() {
    console.log("Logging out");
  },
};

// user.login(user.email, user.password);
// user.login()

// interface SumFn {
//   (a: number, b: number): number;
// }

// let sum: SumFn;

// sum = (a, b) => a + b;

class AuthenticableUser implements Authenticable {
  constructor(
    public userName: string,
    public email: string,
    public password: string
  ) {}

  login(): void {}

  logout(): void {}
}

const a = new AuthenticableUser("Dil", "ab", "12");
console.log(a.email);
