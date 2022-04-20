"use strict";
/* eslint-disable valid-jsdoc */
/* eslint-disable no-array-constructor */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivMapReduce = exports.ProdMapReduce = exports.SubMapReduce = exports.AddMapReduce = exports.BasicOperations = void 0;
/**
 * Abstract Class
 */
class BasicOperations {
    /**
     * Abstrac Class with the array initialize
     */
    constructor() {
        this.numberArray = [];
    }
    run() {
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
    evaluateArray() {
        if (this.numberArray.length === 0) {
            return 'El array no contiene ningún número';
        }
        return 'El array contiene elementos';
    }
    afterInitialisation() { }
    afterEvaluation() { }
    afterChildrenGeneration() { }
    afterSurvivorSelection() { }
}
exports.BasicOperations = BasicOperations;
/**
 * Add Map Reduce Class
 */
class AddMapReduce extends BasicOperations {
    constructor() {
        super();
    }
    /**
     * Initializes the array
     */
    initNumbers() {
        const firstArray = [1, 2, 3, 4, 5];
        this.numberArray.push(firstArray);
    }
    /**
     * This function sums the elements of the array by any number
     * @returns The array elements sum by any number
     */
    map() {
        return (sum) => {
            this.initNumbers();
            const resultArray = [];
            this.numberArray[0].forEach((element) => {
                resultArray.push(element + sum);
            });
            return resultArray;
        };
    }
    /**
     * Reduces the array into a number by doing the sum operation
     * @returns The sum of all numbers on the array
     */
    reduce() {
        this.initNumbers();
        let sum = 0;
        for (let i = 0; i < this.numberArray[0].length; i++) {
            sum += this.numberArray[0][i];
        }
        return sum;
    }
}
exports.AddMapReduce = AddMapReduce;
/**
 * Sub Map Reduce Class
 */
class SubMapReduce extends BasicOperations {
    constructor() {
        super();
    }
    /**
     * Initializes the array
     */
    initNumbers() {
        const firstArray = [1, 2, 3, 4, 5];
        this.numberArray.push(firstArray);
    }
    /**
     * This function subs the elements of the array by any number
     * @returns The array elements sub by any number
     */
    map() {
        return (sub) => {
            this.initNumbers();
            const resultArray = [];
            this.numberArray[0].forEach((element) => {
                resultArray.push(element - sub);
            });
            return resultArray;
        };
    }
    /**
     * Reduces the array into a number by doing the sub operation
     * @returns The sub of all numbers on the array
     */
    reduce() {
        this.initNumbers();
        let sub = 0;
        for (let i = 0; i < this.numberArray[0].length; i++) {
            sub -= this.numberArray[0][i];
        }
        return sub;
    }
}
exports.SubMapReduce = SubMapReduce;
/**
 * Prod Map Reduce Class
 */
class ProdMapReduce extends BasicOperations {
    constructor() {
        super();
    }
    /**
     * Initializes the array
     */
    initNumbers() {
        const firstArray = [1, 2, 3, 4, 5];
        this.numberArray.push(firstArray);
    }
    /**
     * This function multiplies the elements of the array by any number
     * @returns The array elements multiplied by any number
     */
    map() {
        return (mult) => {
            this.initNumbers();
            const resultArray = [];
            this.numberArray[0].forEach((element) => {
                resultArray.push(element * mult);
            });
            return resultArray;
        };
    }
    /**
     * Reduces the array into a number by doing the multiplication operation
     * @returns The multiplication of all numbers on the array
     */
    reduce() {
        this.initNumbers();
        let mult = 1;
        for (let i = 0; i < this.numberArray[0].length; i++) {
            mult *= this.numberArray[0][i];
        }
        return mult;
    }
}
exports.ProdMapReduce = ProdMapReduce;
/**
 * Div Map Reduce Class
 */
class DivMapReduce extends BasicOperations {
    constructor() {
        super();
    }
    /**
     * Initializes de array
     */
    initNumbers() {
        const firstArray = [1, 2, 3, 4, 5];
        this.numberArray.push(firstArray);
    }
    /**
     * This function divides the elements of the array by any number
     * @returns The array elements divided by any number
     */
    map() {
        return (div) => {
            this.initNumbers();
            const resultArray = [];
            this.numberArray[0].forEach((element) => {
                resultArray.push(element / div);
            });
            return resultArray;
        };
    }
    /**
     * Reduces the array into a number by doing the division operation
     * @return The division of all numbers on the array
     */
    reduce() {
        this.initNumbers();
        let div = 1;
        for (let i = 0; i < this.numberArray[0].length; i++) {
            div /= this.numberArray[0][i];
        }
        return div;
    }
}
exports.DivMapReduce = DivMapReduce;
