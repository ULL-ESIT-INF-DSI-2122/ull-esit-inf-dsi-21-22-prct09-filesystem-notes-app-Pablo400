/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index';

describe('Pokemon ', () => {
  it('add(5, 6) return 11', () => {
    expect(add(5, 6)).to.be.equal(11);
  });
});

