"use strict";
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
exports.RemoveNote = void 0;
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
const yargs = __importStar(require("yargs"));
const fs = require('fs');
const utilities_1 = require("./utilities");
class RemoveNote extends utilities_1.ChalkColor {
    constructor() {
        super();
    }
    removeNote() {
        yargs.command({
            command: 'remove',
            describe: 'Remove a note',
            builder: {
                user: {
                    describe: 'User name',
                    demandOption: true,
                    type: 'string',
                },
                title: {
                    describe: 'Note title',
                    demandOption: true,
                    type: 'string',
                },
            },
            handler(argv) {
                const color = new utilities_1.ChalkColor();
                try {
                    fs.readFileSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`);
                    if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`)) {
                        try {
                            fs.unlinkSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`);
                            return console.log(color.getColor('green', 'Nota eliminada'));
                        }
                        catch (err) {
                            return console.log(color.getColor('red', 'La nota no pudo ser eliminada'));
                        }
                    }
                    else {
                        console.log(color.getColor('red', 'Ha ocurrido un error inesperado'));
                    }
                }
                catch (err) {
                    return console.log(color.getColor('red', 'Esa nota no existe'));
                }
            },
        });
    }
}
exports.RemoveNote = RemoveNote;
;
