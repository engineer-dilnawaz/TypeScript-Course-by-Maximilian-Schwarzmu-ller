function logger<T extends new (...args: any[]) => any>(
  target: T,
  context: ClassDecoratorContext
) {
  console.log("logger decorator");
  console.log(target);
  console.log(context);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

function autobind(
  target: (...args: any[]) => any,
  context: ClassMemberDecoratorContext
) {
  context.addInitializer(function (this: any) {
    this[context.name] = this[context.name].bind(this);
  });

  return function (this: any, ...args: any) {
    console.log("Executing original function");
    target.apply(this, args);
  };
}

// function fieldLogger(target: undefined, context: ClassFieldDecoratorContext) {
//   console.log(target);
//   console.log(context);

//   return (initialValue: any) => {
//     console.log(initialValue);
//     return initialValue + " Khan";
//   };
// }

function replacer<T>(initValue: T) {
  return function replacerDecorator(
    target: undefined,
    context: ClassFieldDecoratorContext
  ) {
    console.log(target);
    console.log(context);

    return (initialValue: any) => {
      console.log(initialValue);
      return initValue;
    };
  };
}

@logger
class Person {
  @replacer("New Name")
  name = "Dilnawaz";

  //   constructor() {
  //     this.greet = this.greet.bind(this);
  //   }

  @autobind
  greet(number: number) {
    console.log("Hi, I am " + this.name + " " + number);
  }
}

const ob = new Person();
// const ob1 = new Person();
// ob.greet();
// console.log(ob);

const greet = ob.greet;

greet(102);
