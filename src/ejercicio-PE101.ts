/* eslint-disable valid-jsdoc */
/* eslint-disable no-array-constructor */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

/**
 * Abstract Class
 */
export abstract class BasicOperations {
  protected numberArray: number[][];

  /**
   * Abstrac Class with the array initialize
   */
  constructor() {
    this.numberArray = [];
  }

  public run() {
    this.numberArray;

    this.initNumbers();

    this.afterInitialisation();

    this.evaluateArray();

    this.afterEvaluation();
  }

  /**
   * Evaluates an array
   * @returns Text to know if the array contains elements
   */
  public evaluateArray() {
    if (this.numberArray.length === 0) {
      return 'El array no contiene ningún número';
    }

    return 'El array contiene elementos';
  }

  /**
   * Abstract method for all clases
   */
  protected abstract initNumbers(): void;
  protected abstract reduce(array: number[]) : number;
  protected abstract map(array: number[]): (n : number) => number[];

  protected afterInitialisation() {}
  protected afterEvaluation() {}
  protected afterChildrenGeneration() {}
  protected afterSurvivorSelection() {}
}

/**
 * Add Map Reduce Class
 */
export class AddMapReduce extends BasicOperations {
  constructor() {
    super();
  }

  /**
   * Initializes the array
   */
  protected initNumbers(): void {
    const firstArray: number[] = [1, 2, 3, 4, 5];

    this.numberArray.push(firstArray);
  }

  /**
   * This function sums the elements of the array by any number
   * @returns The array elements sum by any number
   */
  public map(): (n: number) => number[] {
    return (sum) => {
      this.initNumbers();
      const resultArray: number[] = [];

      this.numberArray[0].forEach((element: number) => {
        resultArray.push(element + sum);
      });

      return resultArray;
    };
  }

  /**
   * Reduces the array into a number by doing the sum operation
   * @returns The sum of all numbers on the array
   */
  public reduce(): number {
    this.initNumbers();
    let sum: number = 0;

    for (let i = 0; i < this.numberArray[0].length; i++) {
      sum += this.numberArray[0][i];
    }

    return sum;
  }
}

/**
 * Sub Map Reduce Class
 */
export class SubMapReduce extends BasicOperations {
  constructor() {
    super();
  }

  /**
   * Initializes the array
   */
  protected initNumbers(): void {
    const firstArray: number[] = [1, 2, 3, 4, 5];

    this.numberArray.push(firstArray);
  }

  /**
   * This function subs the elements of the array by any number
   * @returns The array elements sub by any number
   */
  public map(): (n: number) => number[] {
    return (sub) => {
      this.initNumbers();
      const resultArray: number[] = [];

      this.numberArray[0].forEach((element: number) => {
        resultArray.push(element - sub);
      });

      return resultArray;
    };
  }

  /**
   * Reduces the array into a number by doing the sub operation
   * @returns The sub of all numbers on the array
   */
  public reduce(): number {
    this.initNumbers();
    let sub: number = 0;

    for (let i = 0; i < this.numberArray[0].length; i++) {
      sub -= this.numberArray[0][i];
    }

    return sub;
  }
}

/**
 * Prod Map Reduce Class
 */
export class ProdMapReduce extends BasicOperations {
  constructor() {
    super();
  }

  /**
   * Initializes the array
   */
  protected initNumbers(): void {
    const firstArray: number[] = [1, 2, 3, 4, 5];

    this.numberArray.push(firstArray);
  }

  /**
   * This function multiplies the elements of the array by any number
   * @returns The array elements multiplied by any number
   */
  public map(): (n: number) => number[] {
    return (mult) => {
      this.initNumbers();

      const resultArray: number[] = [];

      this.numberArray[0].forEach((element: number) => {
        resultArray.push(element*mult);
      });

      return resultArray;
    };
  }

  /**
   * Reduces the array into a number by doing the multiplication operation
   * @returns The multiplication of all numbers on the array
   */
  public reduce(): number {
    this.initNumbers();

    let mult: number = 1;

    for (let i = 0; i < this.numberArray[0].length; i++) {
      mult *= this.numberArray[0][i];
    }

    return mult;
  }
}

/**
 * Div Map Reduce Class
 */
export class DivMapReduce extends BasicOperations {
  constructor() {
    super();
  }

  /**
   * Initializes de array
   */
  protected initNumbers(): void {
    const firstArray: number[] = [1, 2, 3, 4, 5];

    this.numberArray.push(firstArray);
  }

  /**
   * This function divides the elements of the array by any number
   * @returns The array elements divided by any number
   */
  public map(): (n: number) => number[] {
    return (div) => {
      this.initNumbers();

      const resultArray: number[] = [];

      this.numberArray[0].forEach((element: number) => {
        resultArray.push(element/div);
      });

      return resultArray;
    };
  }

  /**
   * Reduces the array into a number by doing the division operation
   * @return The division of all numbers on the array
   */
  public reduce(): number {
    this.initNumbers();

    let div: number = 1;

    for (let i = 0; i < this.numberArray[0].length; i++) {
      div /= this.numberArray[0][i];
    }

    return div;
  }
}
