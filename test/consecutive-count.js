const expect = require('chai').expect
const { getConsectiveItems } = require('../kata/consecutive-count')

describe('consecutive-count tests', () => {
  it('test 1', () => {
    expect(getConsectiveItems(90000, 0)).to.be.equal(4)
  })

  it('test 2', () => {
    expect(getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i')).to.be.equal(11)
  })
})