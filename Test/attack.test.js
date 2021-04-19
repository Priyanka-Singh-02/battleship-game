const assert = require('assert');
const expect = require('chai').expect;
require('mocha-sinon');
const attack = require('../src/attack');
const createBoard = require('../src/createBoard');

const grid = createBoard(8);
module.exports = () => {
    describe('attack() function', () => {
      it('should exist', () => {
        expect(attack).to.exist;
      });
      it('it should return true ', () => {
        assert.equal(false, attack(4,4,grid));
      });
      
    //   it('it should not return 5 when max input is 5 ', () => {
    //     assert.notStrictEqual(5, getRandomInt(5));
    //   });
    //   it('Should be a function', () => {
    //     expect(getRandomInt).to.be.a('function');
    //   });
    // });
    })};