/* eslint-disable require-jsdoc */

import * as chalk from 'chalk';

export function getColor(color: string, print: string) {
  if (color === 'red') {
    return chalk.default.red(`${print}`);
  } else if (color === 'green') {
    return chalk.default.green(`${print}`);
  } else if (color === 'yellow') {
    return chalk.default.yellow(`${print}`);
  } else if (color === 'blue') {
    return chalk.default.blue(`${print}`);
  }
}
