/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import * as yargs from 'yargs';
import {ChalkColor} from './utilities';
const fs = require('fs');

interface removeNoteInterface {
  removeNote(): void;
}

export class RemoveNote extends ChalkColor implements removeNoteInterface {
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
        const color = new ChalkColor();
        fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`, (err: any, data: any) => {
          if (err) {
            return console.log(color.getColor('red', 'Esa nota no existe'));
          }
          if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`)) {
            fs.unlink(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`, (err: any) => {
              return console.log('Nota eliminada');
            });
          } else {
            console.log(color.getColor('red', 'Ha ocurrido un error inesperado'));
          }
        });
      },
    });
  }
};
