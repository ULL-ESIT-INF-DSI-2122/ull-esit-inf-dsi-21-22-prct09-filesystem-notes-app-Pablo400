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
const utilities_1 = require("./utilities");
const fs = require('fs');
class AddNote extends utilities_1.ChalkColor {
    constructor() {
        super();
    }
    // userAddDirectory() {
    //   yargs.command({
    //     command: 'addUser',
    //     describe: 'Adds a user to the system',
    //     builder: {
    //       user: {
    //         describe: 'User name',
    //         demandOption: true,
    //         type: 'string',
    //       },
    //     },
    //     handler(argv) {
    //       const color = new ChalkColor();
    //       // Comprobar si existe el usuario mirando en el fichero users.json que es una pequeña base de datos con los usuarios del sistema
    //       fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/users.json`, (err: any, data: Buffer) => {
    //         if (err) {
    //           console.log(color.getColor('red', 'Ese fichero no existe'));
    //         }
    //         const json = JSON.parse(data.toString());
    //         console.log(json);
    //         json.forEach( (user: string) => {
    //           if (argv.user === user) {
    //             fs.mkdirSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${user}`);
    //             console.log(color.getColor('green', 'Directorio del usuario creado'));
    //           }
    //         });
    //       });
    //     },
    //   });
    // }
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
                fs.access(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}`, (err) => {
                    if (err) {
                        console.log(color.getColor('red', 'Ese usuario no existe'));
                    }
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
                                fs.writeFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`, JSON.stringify(json, null, 2), (err) => {
                                    if (err) {
                                        return console.log(color.getColor('red', 'No se ha podido crear la nota'));
                                    }
                                    else {
                                        return console.log(color.getColor('green', 'La nota se ha creado de forma satisfactoria'));
                                    }
                                });
                            }
                        }
                        else {
                            return console.log(color.getColor('red', 'No se puede crear una mota si no se le indican un color, use: red, green, yellow o blue como colores'));
                        }
                    }
                    else {
                        return console.log(color.getColor('red', 'No se puede crear una nota vacía'));
                    }
                });
            },
        });
    }
}
exports.AddNote = AddNote;
;
