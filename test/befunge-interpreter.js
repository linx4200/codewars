const expect = require('chai').expect
const { form2DPlane, operations, interpret } = require('../kata/befunge-interpreter')

const test1 = '>987v>.v\nv456<  :\n>321 ^ _@'
const test2 = '>25*"!dlroW olleH":v\n                v:,_@\n                >  ^'
const test3 = '08>:1-:v v *_$.@ \n  ^    _$>\\:^'
const test4 = '01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@'
const test5 = 'v@.<\n >1^\n>?<^\n >2^'

describe('Befunge Interpreter', () => {
  it('splits into a 2D plan', () => {
    expect(form2DPlane(test1)).to.deep.equal([
      ['>', '9', '8', '7', 'v', '>', '.', 'v'],
      ['v', '4', '5', '6', '<', ' ', ' ', ':'],
      ['>', '3', '2', '1', ' ', '^', ' ', '_', '@']
    ])
  })

  it('op: Push a number onto the stack', () => {
    expect(operations.push([], 0, false)).to.deep.equal([0])
  })

  it('op: Push a number onto the stack', () => {
    expect(operations.push([], 'A', true)).to.deep.equal([65])
  })

  it('op: Addition', () => {
    expect(operations.addition([1,2])).to.deep.equal([3])
  })

  it('op: Subtraction', () => {
    expect(operations.subtraction([3,1])).to.deep.equal([2])
  })

  it('op: Multiplication', () => {
    expect(operations.multiplication([3,2])).to.deep.equal([6])
  })

  it('op: Integer division ( a === 0 )', () => {
    expect(operations.division([1,0])).to.deep.equal([0])
  })

  it('op: Integer division ( a !== 0 )', () => {
    expect(operations.division([4,3])).to.deep.equal([1])
  })

  it('op: Modulo ( a === 0 )', () => {
    expect(operations.modulo([1,0])).to.deep.equal([0])
  })

  it('op: Modulo ( a !== 0 )', () => {
    expect(operations.modulo([5,3])).to.deep.equal([2])
  })

  it('op: Logical NOT (1)', () => {
    expect(operations.not([1])).to.deep.equal([0])
  })

  it('op: Logical NOT (0)', () => {
    expect(operations.not([0])).to.deep.equal([1])
  })

  it('op: Greater than', () => {
    expect(operations.greaterThan([3, 2])).to.deep.equal([1])
  })

  it('op: Duplicate value on top of the stack (empty)', () => {
    expect(operations.duplicate([])).to.deep.equal([0])
  })

  it('op: Duplicate value on top of the stack', () => {
    expect(operations.duplicate([1,2,3,4])).to.deep.equal([1,2,3,4,4])
  })

  it('op: Swap two values on top of the stack (only one charecter)', () => {
    expect(operations.swap([1])).to.deep.equal([1, 0])
  })

  it('op: Swap two values on top of the stack', () => {
    expect(operations.swap([1, 2, 4])).to.deep.equal([1, 4, 2])
  })

  it('op: A "put" call', () => {
    const code = [[]]
    operations.putCall([65, 0, 0], code)
    expect(code).to.deep.equal([['A']])
  })

  it('op: A "get" call', () => {
    expect(operations.getCall([0, 0], [['A']])).to.deep.equal([65])
  })

  it('interpret (test case 1)', () => {
    expect(interpret(test1)).to.equal('123456789')
  })

  it('interpret (test case 2)', () => {
    expect(interpret(test2)).to.equal('Hello World!\n')
  })

  it('interpret (test case 3)', () => {
    expect(interpret(test3)).to.equal('40320')
  })

  it('interpret (test case 4)', () => {
    expect(interpret(test4)).to.equal('01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@')
  })

  it('interpret (test case 5)', () => {
    expect(interpret(test5)).to.not.equal('')
  })
})