// type FileSource = { type: "file"; path: string };
// const fileSource: FileSource = {
//   type: "file",
//   path: "some/path/to/file.csv",
// };

// type DBSource = { type: "db"; connectionUrl: string };
// const dbSource: DBSource = {
//   type: "db",
//   connectionUrl: "some-connection-url",
// };

// type Source = FileSource | DBSource;

// // function loadData(source: Source) {
// //   if ("path" in source) {
// //     // source.path; => use that to open the file
// //     return;
// //   }
// //   // source.connectionUrl => to reach out to databse
// // }
// function loadData(source: Source) {
//   if (source.type === "file") {
//     // source.path; => use that to open the file
//     return;
//   }

//   // source.connectionUrl => to reach out to databse
// }

// Type guard using instance of

type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
  type: "file",
  path: "some/path/to/file.csv",
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
  type: "db",
  connectionUrl: "some-connection-url",
};

type Source = FileSource | DBSource;

function isFile(source: Source) {
  return source.type === "file";
}

function loadData(source: Source) {
  // if ('path' in source) {
  //   if (source.type === "file") {
  if (isFile(source)) {
    // source.path
    // source.path; => use that to open the file
    return;
  }

  // source.connectionUrl; => to reach out to database
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User("Max");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}
