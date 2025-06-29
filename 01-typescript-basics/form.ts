// const inputEl = document.getElementById("user-name");

// if (!inputEl) {
//   throw new Error("Element not found!");
// }

// const inputEl = document.getElementById("user-name")!; //! operator
const inputEl = document.getElementById("user-name") as HTMLInputElement | null;

console.log(inputEl?.value);
