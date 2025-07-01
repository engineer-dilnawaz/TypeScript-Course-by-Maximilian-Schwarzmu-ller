const userName = "Dilnawaz";

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
  difficulty: "easy",
  midLevel: 10,
  didStart: false,
  players: ["Dilnawaz", "John"],
};

// type Settings = {
//   difficulty: string;
//   midLevel: number;
//   didStart: boolean;
//   players: string[];
// };

type Settings = typeof settings;

function loadData(settings: Settings) {
  //....
}

loadData(settings);
