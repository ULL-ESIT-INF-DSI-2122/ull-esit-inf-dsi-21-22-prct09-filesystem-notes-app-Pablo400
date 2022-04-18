import chalk from 'chalk';

console.log(chalk.blue('Hola'));

export function add(num1: number, num2: number) : number {
  return num1 + num2;
}

add(5, 6);

