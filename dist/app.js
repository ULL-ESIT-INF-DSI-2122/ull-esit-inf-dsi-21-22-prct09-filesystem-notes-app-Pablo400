"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = __importStar(require("yargs"));
const addUserDirectory_1 = require("./NoteOperations/addUserDirectory");
const addNote_1 = require("./NoteOperations/addNote");
const modifyNote_1 = require("./NoteOperations/modifyNote");
const removeNote_1 = require("./NoteOperations/removeNote");
const listNotes_1 = require("./NoteOperations/listNotes");
const readNotes_1 = require("./NoteOperations/readNotes");
const addUser = new addUserDirectory_1.AddUserDirectory();
const addNote = new addNote_1.AddNote();
const modifyNote = new modifyNote_1.ModifyNote();
const removeNote = new removeNote_1.RemoveNote();
const listNotes = new listNotes_1.ListNotes();
const readNote = new readNotes_1.ReadNotes();
addUser.addUserDirectory();
addNote.addNote();
modifyNote.modifyNote();
removeNote.removeNote();
listNotes.listNotes();
readNote.readNote();
yargs.parse();
