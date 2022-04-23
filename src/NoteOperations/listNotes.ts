/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import * as yargs from 'yargs';
const fs = require('fs');

import {ChalkColor} from './utilities';
import {listNotesInterface} from './interfaces';

/**
 * Class to List Notes
 */
export class ListNotes extends ChalkColor implements listNotesInterface {
  constructor() {
    super();
  }

  /**
   * This function list all notes on any directory of a user
   */
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
        const color = new ChalkColor();
        fs.readdir(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}`, (err: any, files: any) =>{
          if (err) {
            return console.log(color.getColor('red', 'Ese usuario no existe'));
          }
          // Listing all files using forEach
          files.forEach((file: any) => {
            fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${file}`, (err: any, data: any) => {
              if (err) {
                return console.log(color.getColor('red', 'Ese fichero no existe'));
              }
              const json: any = JSON.parse(data.toString());
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
};
