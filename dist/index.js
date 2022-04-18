"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.blue('Hola'));
function add(num1, num2) {
    return num1 + num2;
}
exports.add = add;
add(5, 6);
