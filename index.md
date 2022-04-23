# Práctica 9 - Aplicación de procesamiento de notas de texto

## Introducción

En esta práctica, se tendrá que implementar una aplicación de procesamiento de notas de texto. En concreto, está aplicación debería añadir, modificar, eliminar, listar y leer notas de un usuario concreto. Las notas se deben almacenarán como ficheros JSON en el sistema de ficheros de la máquina que ejecute la aplicación. Además, solo se podrá interactuar con la aplicación desde la línea de comandos. 

Para interactuar con los diferentes comandos de la aplicación con la línea de comandos se deben utilizar los siguientes comandos:

- Añadir una nota
  ```bash
    node dist/app.js add --user="" --title="" --body="" --color=""
  ```
- Modificar una nota
  ```bash
    node dist/app.js modify --user="" --title="" --body=""
  ```
- Eliminar una nota
  ```bash
    node dist/app.js remove --user="" --title="" --body=""
  ```
- Lista notas
  ```bash
    node dist/app.js list --user=""
  ```
- Leer una nota
  ```bash
    node dist/app.js read --user="" --title=""
  ```

## Implementación

En mi implementación me he decantado por utilizar interfaces y clases, pero antes de comentar la implementación con más detalle veamos la distribución de los directorios y ficheros relacionados con la aplicación.

```
📦src
 ┣ 📂NoteOperations
 ┃ ┣ 📜addNote.ts
 ┃ ┣ 📜addUserDirectory.ts
 ┃ ┣ 📜interfaces.ts
 ┃ ┣ 📜listNotes.ts
 ┃ ┣ 📜modifyNote.ts
 ┃ ┣ 📜readNotes.ts
 ┃ ┣ 📜removeNote.ts
 ┃ ┗ 📜utilities.ts
 ┗ 📜app.ts
```

Cono podemos ver mi aplicación principal se define en ```app.ts``` donde se invocan las diferentes clases para poder acceder a las funcionalidades implementadas en cada clase. Dentro del directorio ```NoteOperations``` se encuentran todas las interfaces que definen los métodos y las clases que implementan dichos métodos. 

```typescript
import * as yargs from 'yargs';
import {AddUserDirectory} from './NoteOperations/addUserDirectory';
import {AddNote} from './NoteOperations/addNote';
import {ModifyNote} from './NoteOperations/modifyNote';
import {RemoveNote} from './NoteOperations/removeNote';
import {ListNotes} from './NoteOperations/listNotes';
import {ReadNotes} from './NoteOperations/readNotes';

const addUser = new AddUserDirectory();
const addNote = new AddNote();
const modifyNote = new ModifyNote();
const removeNote = new RemoveNote();
const listNotes = new ListNotes();
const readNote = new ReadNotes();

addUser.addUserDirectory();
addNote.addNote();
modifyNote.modifyNote();
removeNote.removeNote();
listNotes.listNotes();
readNote.readNote();

yargs.parse();
```

Cada clase implementa una operación distinta de las enumeradas anteriormente y también se implementa una clase adicional, está clase permite a los usuarios que se encuentre en un base de datos (incluido en un fichero JSON) crear su directorio para crear notas y realizar las diferentes operaciones de la aplicación.

Todos los comandos relacionados con al línea de comandos se implementan utilizando el paquete ```yargs``` que nos ayuda ayuda a crear herramientas interactivas usando línea de comandos, analizando los argumentos y generando una interfaz elegante para el usuario. Dentro de cada clase se utiliza un comando distinto usando este paquete.

Después de todas estas explicaciones pasamos a comentar cada clase y la interfaz creada:

  - La clase ```AddUserDirectory``` en fichero ```addUserDirectory.ts```.
    - Está clase no es requerida en la funcionalidad básica, pero yo considere necesario crear una clase que permita a los usuarios crear su directorio usando una base de datos que se encuentra en el directorio ```ProgramFiles```.

  ```typescript
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
  ``` 

  - La clase ```AddNote``` en fichero ```addNote.ts```.
    - Está clase permite crear una nota con una serie de parámetros pasados, cada nota se guarda en un fichero JSON con el título de dicha nota que se guarda en el directorio ```ProgramFiles``` en concreto en el directorio con el nombre de dicho usuario.

  ```typescript
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
  ``` 

  - La clase ```ModifyNote``` en fichero ```modifyNote.ts```.
    - Está clase permite modificar las notas ya existentes en el directorio de algún usuario.

  ```typescript
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
  ``` 
  - La clase ```RemoveNote``` en fichero ```removeNote.ts```.
    - Está clase permite eliminar las notas ya existentes en el directorio de algún usuario.

  ```typescript
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
  ``` 

  - La clase ```ListNote``` en fichero ```listNote.ts```.
    - Está clase permite listar las notas dentro del directorio de algún usuario.

  ```typescript
  ``` 
  - La clase ```ReadNote``` en fichero ```readNote.ts```.
    - Está clase permite leer alguna nota de un usuario en concreto dentro del directorio de dicho usuario.

  ```typescript
  export class ReadNotes extends ChalkColor implements readNoteInterface {
    constructor() {
      super();
    }
    readNote() {
      yargs.command({
        command: 'read',
        describe: 'Read a note',
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
          if (fs.existsSync(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`)) {
            fs.readFile(`/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/ProgramFiles/${argv.user}/${argv.title}.json`, (err: any, data: any) => {
              if (err) {
                return console.log(color.getColor('red', 'Ha ocurrido un error inesperado'));
              }
              const json: any = JSON.parse(data.toString());
              console.log(color.getColor(json.color, json.title));
              console.log(color.getColor(json.color, json.body));
            });
          } else {
            return console.log(color.getColor('red', 'Esa nota no existe'));
          }
        },
      });
    }
  };
  ``` 

  - La clase ```ChalkColor``` en el fichero ```utilities.ts```.
    - Está clase utiliza el paquete ```chalk``` para mostrar el texto de la notas en algún color (en los atríbutos se define el color de la nota) y para mostrar las errores de color rojo o los aciertos de color verde. Está clase contiene un método que recibe el color de la nota y el texto que se quiere colorear.

  ```typescript
    import * as chalk from 'chalk';
    import {chalkColorInterface} from './interfaces';

    export class ChalkColor implements chalkColorInterface {
    constructor() {}
    getColor(color: string, print: string): string | undefined {
      if (color === 'red') {
        return chalk.default.red(`${print}`);
      } else if (color === 'green') {
        return chalk.default.green(`${print}`);
      } else if (color === 'yellow') {
        return chalk.default.yellow(`${print}`);
      } else if (color === 'blue') {
        return chalk.default.blue(`${print}`);
      }

      return undefined;
    }
  }
  ``` 

  - Las interfaces se encuentran definidas en el fichero ```interfaces.ts```.
  
  ```typescript
  export interface addNoteInterface {
    addNote(): void;
  }

  export interface addUserDirectoryInterface {
    addUserDirectory(): void;
  }

  export interface listNotesInterface {
    listNotes(): void;
  }

  export interface modifyNoteInterface {
    modifyNote(): void;
  }

  export interface readNoteInterface {
    readNote(): void;
  }

  export interface removeNoteInterface {
    removeNote(): void;
  }

  export interface chalkColorInterface {
    getColor(color: string, print: string): string | undefined;
  }
  ```

**Los directorios de cada usuario se encuentran en el directorio ```ProgramFiles```, este directorio también contiene la base de datos donde se recogen todos los usuarios y las notas de cada uno.** El directorio actualmente muestra los siguiente:

```
📦ProgramFiles
 ┣ 📂Ricardo
 ┣ 📂felipe
 ┣ 📂pablo
 ┃ ┣ 📜Final.json
 ┃ ┣ 📜pablo2.json
 ┃ ┗ 📜prueba.json
 ┗ 📜users.json
```

En el fichero ```users.json``` se incluye la base de datos. Se puede ver que hay tres directorios creados, pero el único que contiene notas es pablo y dentro de cada fichero hay un nota con una serie de atríbutos. 

Un ejemplo de los atríbutos lo podemos ver en el fichero ```prueba.json```:

```json
{
  "title": "prueba",
  "body": "Hola me llamo pablo",
  "color": "blue"
}
```

Para terminar, me ha parecido una práctica muy interesante no solo por ser el punto de contacto con node.js si no porque me ha demostrado que con las herramientas que tiene para trabajar con el sistema de ficheros son bastante buenas y fáciles de manejar. También espero que con las próximas APIs o herramientas que utilicemos sean igual o incluso más interesantes que está.
