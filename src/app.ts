/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

import * as yargs from 'yargs';
import {getColor} from './utilities';
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
    fs.access(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}`, (err: any) => {
      if (err) {
        console.log(getColor('red', 'Ese usuario no existe'));
      } else {
        const json: any = {
          title: argv.title,
          body: argv.body,
          color: argv.color,
        };

        // Se comprueba si la nota ya existe
        if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`)) {
          console.log(getColor('red', 'Esa nota ya existe'));
        } else {
          fs.writeFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`, JSON.stringify(json, null, 2), (err: any) => {
            if (err) {
              console.log(getColor('red', 'No se ha podido crear la nota'));
            } else {
              console.log(getColor('green', 'La nota se ha creado de forma satisfactoria'));
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
    fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`, (err: any, data: any) => {
      if (err) {
        return console.log(getColor('red', 'Ese fichero no existe'));
      }
      if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`)) {
        console.log(getColor('red', 'Esa nota ya existe'));
      } else {
        fs.unlink(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`, (err: any) => {
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
    fs.readdir(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}`, (err: any, files: any) =>{
      if (err) {
        return console.log(getColor('red', 'Ese usuario no existe'));
      }
      // Listing all files using forEach
      files.forEach((file: any) => {
        fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${file}`, (err: any, data: any) => {
          if (err) {
            return console.log(getColor('red', 'Ese fichero no existe'));
          }
          const json: any = JSON.parse(data.toString());
          console.log(getColor(json.color, json.title));
        });
      });
      if (files.length === 0) {
        console.log(getColor('red', 'Ese usuario no tiene ninguna nota'));
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
      console.log(getColor('red', 'Esa nota ya existe'));
    } else {
      fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/${argv.user}/${argv.title}.json`, (err: any, data: any) => {
        if (err) {
          return console.log(getColor('red', 'Ese fichero o usuario no existe'));
        }
        const json: any = JSON.parse(data.toString());
        console.log(getColor(json.color, json.title));
        console.log(getColor(json.color, json.body));
      });
    }
  },
});

yargs.parse();

