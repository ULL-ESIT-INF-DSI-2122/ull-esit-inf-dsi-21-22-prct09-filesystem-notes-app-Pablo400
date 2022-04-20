/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';

import {AddMapReduce} from '../src/ejercicio-PE101';
import {SubMapReduce} from '../src/ejercicio-PE101';
import {ProdMapReduce} from '../src/ejercicio-PE101';
import {DivMapReduce} from '../src/ejercicio-PE101';

const test1 = new AddMapReduce();
const test2 = new SubMapReduce();
const test3 = new ProdMapReduce();
const test4 = new DivMapReduce();

describe('Test 1', () => {
  it('test1.map([])(2) return [3, 4, 5, 6, 7]', () => {
    expect(test1.map()(2)).to.be.eql([3, 4, 5, 6, 7]);
  });
  it('test1.reduce([]) return 15', () => {
    expect(test1.reduce()).to.be.equal(15);
  });
  it('test1.evaluateNumbers() return El array contiene elementos', () => {
    expect(test1.evaluateArray()).to.be.equal('El array contiene elementos');
  });
});

describe('Test 2', () => {
  it('test2.map([])(2) return [-1, 0, 1, 2, 3]', () => {
    expect(test2.map()(2)).to.be.eql([-1, 0, 1, 2, 3]);
  });
  it('test2.reduce([]) return -15', () => {
    expect(test2.reduce()).to.be.equal(-15);
  });
});

describe('Test 3', () => {
  it('test4.map([])(2) return [2, 4, 6, 8, 10]', () => {
    expect(test3.map()(2)).to.be.eql([2, 4, 6, 8, 10]);
  });
  it('test3.reduce([]) return 120', () => {
    expect(test3.reduce()).to.be.equal(120);
  });
});

describe('Test 4', () => {
  it('test4.map([])(2) return [0.5, 1, 1.5, 2, 2.5]', () => {
    expect(test4.map()(2)).to.be.eql([0.5, 1, 1.5, 2, 2.5]);
  });
  it('test4.reduce([]) return 0.008333333333333333', () => {
    expect(test4.reduce()).to.be.equal(0.008333333333333333);
  });
});

