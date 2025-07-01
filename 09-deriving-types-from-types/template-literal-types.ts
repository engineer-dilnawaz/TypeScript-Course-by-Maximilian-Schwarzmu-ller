// const mainUserName = "Dilnawaz";

// const greeting = `Hi there! ${mainUserName}`;

//

type ReadPermission = "no-read" | "read";
type WritePermission = "no-write" | "write";

type FilePermission = `${ReadPermission}-${WritePermission}`;

type DataFile = {
  data: string;
  permission: FilePermission;
};

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
  [Key in DataFileEventNames]: () => void;
};
