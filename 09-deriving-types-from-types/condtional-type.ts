type StringArray = string[];
// type ElementType<T extends any[]> = T[number];

// let text = "Hello";

// type Example1 = ElementType<StringArray>;
// type Example2 = ElementType<typeof text>;

type GetElementType<T> = T extends any[] ? T[number] : never;

let text = 1;

type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof text>;

type FullNamePerson = {
  firstName: string;
  lastName: String;
};

type FullnameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullName<T extends object>(person: T): FullnameOrNothing<T> {
  if (
    "firstName" in person &&
    "lastName" in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
  }

  throw new Error("No first name and / or last name found");
}

const name1 = getFullName({});
const name2 = getFullName({ firstName: "Dilnawaz" });
const name3 = getFullName({ firstName: "Dilnawaz", lastName: "Khan" });
