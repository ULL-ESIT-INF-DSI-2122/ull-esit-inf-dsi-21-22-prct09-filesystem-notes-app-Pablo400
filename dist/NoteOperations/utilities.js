"use strict";
/* eslint-disable require-jsdoc */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChalkColor = void 0;
const chalk = __importStar(require("chalk"));
class ChalkColor {
    constructor() { }
    getColor(color, print) {
        if (color === 'red') {
            return chalk.default.red(`${print}`);
        }
        else if (color === 'green') {
            return chalk.default.green(`${print}`);
        }
        else if (color === 'yellow') {
            return chalk.default.yellow(`${print}`);
        }
        else if (color === 'blue') {
            return chalk.default.blue(`${print}`);
        }
        return undefined;
    }
}
exports.ChalkColor = ChalkColor;
