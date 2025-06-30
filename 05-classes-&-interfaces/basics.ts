// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class User0 {
  public readonly hobbies: string[] = [];

  constructor(public name: string, private age: number) {}

  greet() {
    console.log("My age: ", this.age);
  }
}

const user1 = new User0("Dilnawaz", 26);
user1.hobbies.push("Sports");
