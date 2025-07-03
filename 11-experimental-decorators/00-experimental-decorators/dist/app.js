"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log("Logger Factory");
    return function (target) {
        console.log(logString);
        console.log(target);
    };
}
function WithTemplate(template, hookId) {
    console.log("Template Factory");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("Rendering template");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Dilnawaz";
        console.log("creating person object...");
    }
};
Person = __decorate([
    Logger("Logging - PERSON"),
    WithTemplate("<h1>Hello Person Object Factory</h1>", "app")
], Person);
const p1 = new Person();
console.log(p1);
function Log(target, propertyName) {
    console.log("Property Decorator!");
    console.log(target, propertyName);
}
function LogAccessor(target, propertyName, descriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}
function Log3(target, propertyName, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}
function Log4(target, name, positionArg) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(positionArg);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be possitive.");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    LogAccessor
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const p2 = new Product("Book", 18);
const p3 = new Product("Book 1", 28);
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustDescriptor = {
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
    constructor() {
        this.message = "This works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
const registeredValidator = {};
function Required(target, propertyName) {
    registeredValidator[target.constructor.name] = {
        ...registeredValidator[target.constructor.name],
        [propertyName]: ["required"],
    };
}
function PositiveNumber(target, propertyName) {
    registeredValidator[target.constructor.name] = {
        ...registeredValidator[target.constructor.name],
        [propertyName]: ["positive"],
    };
}
function validate(obj) {
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
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input, please try again");
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map