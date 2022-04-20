"use strict";
/* eslint-disable no-array-constructor */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivMapReduce = exports.ProdMapReduce = exports.SubMapReduce = exports.AddMapReduce = exports.BasicOperations = void 0;
class BasicOperations {
    constructor() {
        this.numberArray = [];
    }
    run() {
        this.numberArray;
        this.initNumbers();
        this.afterInitialisation();
        this.evaluateNumbers();
        this.afterEvaluation();
    }
    evaluateNumbers() {
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
class AddMapReduce extends BasicOperations {
    constructor() {
        super();
    }
    initNumbers() {
        const firstArray = [1, 2, 3, 4, 5];
        this.numberArray.push(firstArray);
    }
    map(array) {
        return (sum) => {
            this.initNumbers();
            array = this.numberArray[0];
            const resultArray = [];
            array.forEach((element) => {
                resultArray.push(element + sum);
            });
            return resultArray;
        };
    }
    reduce(array) {
        this.initNumbers();
        array = this.numberArray[0];
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
}
exports.AddMapReduce = AddMapReduce;
class SubMapReduce extends BasicOperations {
    constructor() {
        super();
    }
    initNumbers() {
        const firstArray = [1, 2, 3, 4, 5];
        this.numberArray.push(firstArray);
    }
    map(array) {
        return (sub) => {
            this.initNumbers();
            array = this.numberArray[0];
            const resultArray = [];
            array.forEach((element) => {
                resultArray.push(element - sub);
            });
            return resultArray;
        };
    }
    reduce(array) {
        this.initNumbers();
        array = this.numberArray[0];
        let sub = 0;
        for (let i = 0; i < array.length; i++) {
            sub -= array[i];
        }
        return sub;
    }
}
exports.SubMapReduce = SubMapReduce;
class ProdMapReduce extends BasicOperations {
    constructor() {
        super();
    }
    initNumbers() {
        const firstArray = [1, 2, 3, 4, 5];
        this.numberArray.push(firstArray);
    }
    map(array) {
        return (mult) => {
            this.initNumbers();
            array = this.numberArray[0];
            const resultArray = [];
            array.forEach((element) => {
                resultArray.push(element * mult);
            });
            return resultArray;
        };
    }
    reduce(array) {
        this.initNumbers();
        array = this.numberArray[0];
        let mult = 1;
        for (let i = 0; i < array.length; i++) {
            mult *= array[i];
        }
        return mult;
    }
}
exports.ProdMapReduce = ProdMapReduce;
class DivMapReduce extends BasicOperations {
    constructor() {
        super();
    }
    initNumbers() {
        const firstArray = [1, 2, 3, 4, 5];
        this.numberArray.push(firstArray);
    }
    map(array) {
        return (div) => {
            this.initNumbers();
            array = this.numberArray[0];
            const resultArray = [];
            array.forEach((element) => {
                resultArray.push(element / div);
            });
            return resultArray;
        };
    }
    reduce(array) {
        this.initNumbers();
        array = this.numberArray[0];
        let div = 1;
        for (let i = 0; i < array.length; i++) {
            div /= array[i];
        }
        return div;
    }
}
exports.DivMapReduce = DivMapReduce;
const prueba = new AddMapReduce();
console.log(prueba.map([])(2));
console.log(prueba.reduce([]));
const prueba2 = new SubMapReduce();
console.log(prueba2.map([])(2));
console.log(prueba2.reduce([]));
const prueba3 = new ProdMapReduce();
console.log(prueba3.map([])(2));
console.log(prueba3.reduce([]));
const prueba4 = new DivMapReduce();
console.log(prueba4.map([])(2));
console.log(prueba4.reduce([]));
console.log(prueba.evaluateNumbers());
