/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import * as yargs from 'yargs';
const fs = require('fs');

import {ChalkColor} from './utilities';
import {addNoteInterface} from './interfaces';

export class AddNote extends ChalkColor implements addNoteInterface {
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
        const color = new ChalkColor();
        fs.access(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}`, (err: any) => {
          if (err) {
            console.log(color.getColor('red', 'Ese usuario no existe'));
          }

          const json: any = {
            title: argv.title,
            body: argv.body,
            color: argv.color,
          };

          if (argv.title != '' && argv.color != '' && argv.body != '' ) {
            if (argv.color === 'red' || argv.color === 'green' || argv.color === 'yellow' || argv.color === 'blue') {
            // Se comprueba si la nota ya existe
              if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`)) {
                console.log(color.getColor('red', 'Esa nota ya existe'));
              } else {
                fs.writeFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`, JSON.stringify(json, null, 2), (err: any) => {
                  if (err) {
                    return console.log(color.getColor('red', 'No se ha podido crear la nota'));
                  } else {
                    return console.log(color.getColor('green', 'La nota se ha creado de forma satisfactoria'));
                  }
                });
              }
            } else {
              return console.log(color.getColor('red', 'No se puede crear una mota si no se le indican un color, use: red, green, yellow o blue como colores'));
            }
          } else {
            return console.log(color.getColor('red', 'No se puede crear una nota vacía'));
          }
        });
      },
    });
  }
};
