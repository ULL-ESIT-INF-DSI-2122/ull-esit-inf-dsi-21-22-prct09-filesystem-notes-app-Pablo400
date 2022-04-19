import * as yargs from 'yargs';

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string') {
      console.log('Hola');
    }
  },
});

// import {writeFile} from 'fs';

// const fs: any = require('fs');
// const dir: any = './tmp';

// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir);
// }

// writeFile('helloworld.txt', 'Hello World!', () => {
//   console.log('File helloworld.txt has just been created');
// });


