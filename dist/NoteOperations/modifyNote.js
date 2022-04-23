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
exports.ModifyNote = void 0;
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
const yargs = __importStar(require("yargs"));
const fs = require('fs');
const utilities_1 = require("./utilities");
class ModifyNote extends utilities_1.ChalkColor {
    constructor() {
        super();
    }
    modifyNote() {
        yargs.command({
            command: 'modify',
            describe: 'Modify an existing Note',
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
            },
            handler(argv) {
                const color = new utilities_1.ChalkColor();
                if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`)) {
                    try {
                        fs.readFileSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`);
                        // Paso el contenido del fichero en formato JSON a una variable y le cambio el valor del cuerpo
                        // y se crea el mismo fichero con el nuevo body pasado
                        const json = require(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`);
                        json.body = argv.body;
                        try {
                            fs.writeFileSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`, JSON.stringify(json, null, 2));
                            return console.log(color.getColor('green', 'La nota se ha modificado de forma satisfactoria'));
                        }
                        catch (err) {
                            return console.log(color.getColor('red', 'No se ha podido crear la nota'));
                        }
                    }
                    catch (err) {
                        return console.log(color.getColor('red', 'Esa nota no existe'));
                    }
                }
                else {
                    console.log(color.getColor('red', 'Ha ocurrido un error inesperado'));
                }
            },
        });
    }
}
exports.ModifyNote = ModifyNote;
;
