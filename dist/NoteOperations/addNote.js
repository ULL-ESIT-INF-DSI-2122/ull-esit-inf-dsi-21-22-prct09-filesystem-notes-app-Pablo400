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
exports.AddNote = void 0;
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
const yargs = __importStar(require("yargs"));
const fs = require('fs');
const utilities_1 = require("./utilities");
class AddNote extends utilities_1.ChalkColor {
    constructor() {
        super();
    }
    addNote() {
        yargs.command({
            command: 'add',
            describe: 'Add a new note',
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
                body: {
                    describe: 'Note',
                    demandOption: true,
                    type: 'string',
                },
                color: {
                    describe: 'Note color',
                    demandOption: true,
                    type: 'string',
                },
            },
            handler(argv) {
                const color = new utilities_1.ChalkColor();
                // Comrpueba si el directorio del usuario ya existe
                if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}`)) {
                    const json = {
                        title: argv.title,
                        body: argv.body,
                        color: argv.color,
                    };
                    if (argv.title != '' && argv.color != '' && argv.body != '') {
                        if (argv.color === 'red' || argv.color === 'green' || argv.color === 'yellow' || argv.color === 'blue') {
                            // Se comprueba si la nota ya existe
                            if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`)) {
                                console.log(color.getColor('red', 'Esa nota ya existe'));
                            }
                            else {
                                try {
                                    fs.appendFileSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`, JSON.stringify(json, null, 2));
                                    return console.log(color.getColor('green', 'La nota se ha creado de forma satisfactoria'));
                                }
                                catch (err) {
                                    return console.log(color.getColor('red', 'No se ha podido crear la nota'));
                                }
                            }
                        }
                        else {
                            return console.log(color.getColor('red', 'No se puede crear una nota si no se le indican un color, use: red, green, yellow o blue como colores'));
                        }
                    }
                    else {
                        return console.log(color.getColor('red', 'No se puede crear una nota vacía'));
                    }
                }
                else {
                    return console.log(color.getColor('red', 'Ese usuario no existe'));
                }
            },
        });
    }
}
exports.AddNote = AddNote;
;
