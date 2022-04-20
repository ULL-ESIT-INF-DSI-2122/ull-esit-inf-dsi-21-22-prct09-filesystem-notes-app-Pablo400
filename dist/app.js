"use strict";
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
const utilities_1 = require("./utilities");
const fs = require('fs');
/**
 * Yargs Command to add a note
 */
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
        // Comprobar si existe el usuario, revisando si tiene un directorio creado
        fs.access(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}`, (err) => {
            if (err) {
                console.log((0, utilities_1.getColor)('red', 'Ese usuario no existe'));
            }
            else {
                const json = {
                    title: argv.title,
                    body: argv.body,
                    color: argv.color,
                };
                // Se comprueba si la nota ya existe
                if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`)) {
                    console.log((0, utilities_1.getColor)('red', 'Esa nota ya existe'));
                }
                else {
                    fs.writeFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`, JSON.stringify(json, null, 2), (err) => {
                        if (err) {
                            console.log((0, utilities_1.getColor)('red', 'No se ha podido crear la nota'));
                        }
                        else {
                            console.log((0, utilities_1.getColor)('green', 'La nota se ha creado de forma satisfactoria'));
                        }
                    });
                }
            }
        });
    },
});
/**
 * Yargs Command to remove a note
 */
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
        fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`, (err, data) => {
            if (err) {
                return console.log((0, utilities_1.getColor)('red', 'Ese fichero no existe'));
            }
            if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`)) {
                console.log((0, utilities_1.getColor)('red', 'Esa nota ya existe'));
            }
            else {
                fs.unlink(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`, (err) => {
                    return console.log('Nota eliminada');
                });
            }
        });
    },
});
/**
 * Yargs Command to list all notes of any user
 */
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
        fs.readdir(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}`, (err, files) => {
            if (err) {
                return console.log((0, utilities_1.getColor)('red', 'Ese usuario no existe'));
            }
            // Listing all files using forEach
            files.forEach((file) => {
                fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${file}`, (err, data) => {
                    if (err) {
                        return console.log((0, utilities_1.getColor)('red', 'Ese fichero no existe'));
                    }
                    const json = JSON.parse(data.toString());
                    console.log((0, utilities_1.getColor)(json.color, json.title));
                });
            });
            if (files.length === 0) {
                console.log((0, utilities_1.getColor)('red', 'Ese usuario no tiene ninguna nota'));
            }
        });
    },
});
/**
 * Yargs Command to read a note
 */
yargs.command({
    command: 'read',
    describe: 'Reads a note',
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
        // listing all files using forEach
        if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`)) {
            console.log((0, utilities_1.getColor)('red', 'Esa nota ya existe'));
        }
        else {
            fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`, (err, data) => {
                if (err) {
                    return console.log((0, utilities_1.getColor)('red', 'Ese fichero o usuario no existe'));
                }
                const json = JSON.parse(data.toString());
                console.log((0, utilities_1.getColor)(json.color, json.title));
                console.log((0, utilities_1.getColor)(json.color, json.body));
            });
        }
    },
});
yargs.parse();
