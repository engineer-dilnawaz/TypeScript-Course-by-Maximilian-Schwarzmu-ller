class Student {
  constructor(protected _firstName: string, protected _lastName: string) {}

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid Name");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid Name");
    }
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  static eid = "USER";

  static greet() {
    console.log("Hello static!");
  }
}

console.log(Student.eid);

const std = new Student("Dilnawaz", "Khan");

console.log(std.fullName);

std.firstName = "John";
std.lastName = "Doe";

console.log(std.fullName);

class Monitor extends Student {
  constructor(
    public _firstName: string,
    public _lastName: string,
    public title: string
  ) {
    super(_firstName, _lastName);
  }
}
