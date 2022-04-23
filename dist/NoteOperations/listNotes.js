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
exports.ListNotes = void 0;
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
const yargs = __importStar(require("yargs"));
const fs = require('fs');
const utilities_1 = require("./utilities");
class ListNotes extends utilities_1.ChalkColor {
    constructor() {
        super();
    }
    listNotes() {
        yargs.command({
            command: 'list',
            describe: 'List all notes',
            builder: {
                user: {
                    describe: 'User name',
                    demandOption: true,
                    type: 'string',
                },
            },
            handler(argv) {
                const color = new utilities_1.ChalkColor();
                fs.readdir(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}`, (err, files) => {
                    if (err) {
                        return console.log(color.getColor('red', 'Ese usuario no existe'));
                    }
                    // Listing all files using forEach
                    files.forEach((file) => {
                        fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${file}`, (err, data) => {
                            if (err) {
                                return console.log(color.getColor('red', 'Ese fichero no existe'));
                            }
                            const json = JSON.parse(data.toString());
                            console.log(color.getColor(json.color, json.title));
                        });
                        if (files.length === 0) {
                            return console.log(color.getColor('red', 'Ese usuario no tiene ninguna nota'));
                        }
                    });
                });
            },
        });
    }
}
exports.ListNotes = ListNotes;
;
