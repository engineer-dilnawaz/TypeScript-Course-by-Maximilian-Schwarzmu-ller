// function Logger(target: Function) {
//   console.log("Logging ...");
//   console.log(target);
// }

// factory decorator
function Logger(logString: string) {
  console.log("Logger Factory");
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();

        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        // const p1 = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("Logging - PERSON")
@WithTemplate("<h1>Hello Person Object Factory</h1>", "app")
class Person {
  name = "Dilnawaz";
  constructor() {
    console.log("creating person object...");
  }
}

const p1 = new Person();
console.log(p1);

// -----
function Log(target: any, propertyName: any) {
  console.log("Property Decorator!");
  console.log(target, propertyName);
}

function LogAccessor(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
}

function Log3(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, positionArg: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(positionArg);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @LogAccessor
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be possitive.");
    }
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p2 = new Product("Book", 18);
const p3 = new Product("Book 1", 28);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  const adjustDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjustDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

// -----

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; //['required', 'positive']
  };
}

const registeredValidator: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
  // registeredValidator[target.constructor.name] = {
  //   [propertyName]: ["required"],
  // };
  registeredValidator[target.constructor.name] = {
    ...registeredValidator[target.constructor.name],
    [propertyName]: ["required"],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  // registeredValidator[target.constructor.name] = {
  //   [propertyName]: ["positive"],
  // };
  registeredValidator[target.constructor.name] = {
    ...registeredValidator[target.constructor.name],
    [propertyName]: ["positive"],
  };
}

function validate(obj: any) {
  const objectValidatorConfig = registeredValidator[obj.constructor.name];

  if (!objectValidatorConfig) {
    return true;
  }

  let isValid = true;
  for (const prop in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again");
    return;
  }

  console.log(createdCourse);
});
