import * as chalk from 'chalk';
// import * as yargs from 'yargs';

console.log(chalk.default.blue('This text is blue'));
console.log(chalk.default.blue.inverse('This text is over a blue background'));

// yargs.command({
//   command: 'add',
//   describe: 'Add a new note',
//   builder: {
//     title: {
//       describe: 'Note title',
//       demandOption: true,
//       type: 'string',
//     },
//   },
//   handler(argv) {
//     console.log(argv.title);
//   },
// });

// import {writeFile} from 'fs';

// const fs: any = require('fs');
// const dir: any = './tmp';

// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir);
// }

// writeFile('helloworld.txt', 'Hello World!', () => {
//   console.log('File helloworld.txt has just been created');
// });


