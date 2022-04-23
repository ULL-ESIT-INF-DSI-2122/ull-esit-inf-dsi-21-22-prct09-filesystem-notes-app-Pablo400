export interface addNoteInterface {
  addNote(): void;
}

export interface addUserDirectoryInterface {
  addUserDirectory(): void;
}

export interface listNotesInterface {
  listNotes(): void;
}

export interface modifyNoteInterface {
  modifyNote(): void;
}

export interface readNoteInterface {
  readNote(): void;
}

export interface removeNoteInterface {
  removeNote(): void;
}

export interface chalkColorInterface {
  getColor(color: string, print: string): string | undefined;
}
