type DataStore = {
  [prop: string]: number | boolean;
};

const store: DataStore = {};

store.id = 101;
store.isOpen = false;

// store.name = 'ABC store'; // not allowed as prop can have number or boolean value only

// Constants Type with as const
let roles = ["admin", "guest", "editor"] as const;

// roles.push('New role'); //not allowed as roles are readonly

// roles[0]; //admin
// roles[1]; //guest

// advance which means remove array and only provide the roles string admin | guest | editor
// type Role = typeof roles[number]

// Record Type

type DataStore1 = {
  [prop: string]: number | boolean;
};

type recordDataStore = Record<string, number | boolean>;

// statisfies keyword
const dataEntries = {
  entry1: 0.312,
  entry2: 3.421,
  entry10: 1023,
} satisfies Record<string, number>;

// dataEntries.entry4; // error does not exists
