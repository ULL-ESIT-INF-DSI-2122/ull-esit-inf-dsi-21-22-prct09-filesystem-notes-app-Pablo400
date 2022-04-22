/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import * as yargs from 'yargs';
import {ChalkColor} from './utilities';
const fs = require('fs');

interface modifyNoteInterface {
  modifyNote(): void;
}

export class ModifyNote extends ChalkColor implements modifyNoteInterface {
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
        const color = new ChalkColor();
        if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`)) {
          fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`, (err: Error, data: Buffer) => {
            if (err) {
              return console.log(color.getColor('red', 'Esa nota no existe'));
            }

            // Paso el contenido del fichero en formato JSON a una variable y le cambio el valor del cuerpo
            // y se crea el mismo fichero con el nuevo body pasado
            const json = JSON.parse(data.toString());
            json.body = argv.body;

            fs.writeFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`, JSON.stringify(json, null, 2), (err: any) => {
              if (err) {
                return console.log(color.getColor('red', 'No se ha podido crear la nota'));
              } else {
                return console.log(color.getColor('green', 'La nota se ha creado cambiado de forma satisfactoria'));
              }
            });
          });
        } else {
          console.log(color.getColor('red', 'Ha ocurrido un error inesperado'));
        }
      },
    });
  }
};
