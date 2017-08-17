const expect = require('chai').expect
const { solution } = require('../kata/regular-expression-check-if-divisible-by-0b111')

const invalid_args = ['a', '3',' ', '1+0']

describe('Check if divisible by 0b111 (7)', () => {
  it('Invalid strings should be rejected', () => {
    for (let x of invalid_args) {
      expect(solution.test(x)).to.be.false
    }
  })
})