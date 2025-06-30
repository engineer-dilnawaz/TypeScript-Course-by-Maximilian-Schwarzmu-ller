type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  crendetials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;

type AccessDatabaseData = DatabaseData & Status;
