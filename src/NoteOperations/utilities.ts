
/* eslint-disable require-jsdoc */

import * as chalk from 'chalk';

interface chalkColorInterface {
  getColor(color: string, print: string): string | undefined;
}

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
