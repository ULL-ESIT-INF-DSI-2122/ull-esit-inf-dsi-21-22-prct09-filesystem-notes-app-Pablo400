/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import * as yargs from 'yargs';
const fs = require('fs');

import {ChalkColor} from './utilities';
import {addUserDirectoryInterface} from './interfaces';

export class AddUserDirectory extends ChalkColor implements addUserDirectoryInterface {
  constructor() {
    super();
  }

  addUserDirectory() {
    yargs.command({
      command: 'addUser',
      describe: 'Adds a user to the system',
      builder: {
        user: {
          describe: 'User name',
          demandOption: true,
          type: 'string',
        },
      },
      handler(argv) {
        const color = new ChalkColor();
        let createDir: boolean = false;
        // Comprobar si existe el usuario mirando en el fichero users.json que es una pequeña base de datos con los usuarios del sistema
        // y creamos su fichero correspondiente
        fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/users.json`, (err: any, data: Buffer) => {
          if (err) {
            console.log(color.getColor('red', 'Ese fichero no existe'));
          }

          const json = JSON.parse(data.toString());
          for (const user of json) {
            if (argv.user === user.username) {
              createDir = true;
              break;
            }
          }
          if (createDir === true) {
            fs.mkdirSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}`);
            console.log(color.getColor('green', 'Directorio del usuario creado'));
          } else {
            console.log(color.getColor('red', 'Ese usuario no existe'));
          }
        });
      },
    });
  }
};
