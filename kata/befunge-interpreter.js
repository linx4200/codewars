// https://www.codewars.com/kata/526c7b931666d07889000a3c

// Run test:
// npm-run mocha ../test/befunge-interpreter.js

function form2DPlane(code) {
  return code.split('\n').map(row => row.split(''))
}

const operations = {
  move([i, j], direction) {
    if (direction === 'right') j += 1
    if (direction === 'left') j -= 1
    if (direction === 'down') i += 1
    if (direction === 'up') i -= 1
    return [i, j]
  },
  push(stack, character, flag) {
    if(flag) {
      stack.push(character.charCodeAt())
    } else {
      stack.push(+character)
    }
    return stack
  },
  addition(stack) {
    const a = stack.pop()
    const b = stack.pop()
    stack.push(a+b)
    return stack
  },
  subtraction(stack) {
    const a = stack.pop()
    const b = stack.pop()
    stack.push(b-a)
    return stack
  },
  multiplication(stack) {
    const a = stack.pop()
    const b = stack.pop()
    stack.push(a * b)
    return stack
  },
  division(stack) {
    const a = stack.pop()
    const b = stack.pop()
    stack.push(a === 0 ? 0 : Math.floor(b / a))
    return stack
  },
  modulo(stack) {
    const a = stack.pop()
    const b = stack.pop()
    stack.push(a === 0 ? 0 : b % a)
    return stack
  },
  not(stack) {
    const a = stack.pop()
    stack.push(a === 0 ? 1 : 0)
    return stack
  },
  greaterThan(stack) {
    const a = stack.pop()
    const b = stack.pop()
    stack.push(b > a ? 1 : 0)
    return stack
  },
  duplicate(stack) {
    const l = stack.length
    if (l === 0) return [0]
    stack[l] = stack[l - 1]
    return stack
  },
  swap(stack) {
    const a = stack.pop()
    const b = stack.pop() || 0
    return stack.concat([a, b])
  },
  putCall(stack, plane) {
    const x = stack.pop()
    const y = stack.pop()
    const v = stack.pop()
    plane[x][y] = String.fromCharCode(v)
  },
  getCall(stack, plane) {
    const x = stack.pop()
    const y = stack.pop()
    stack.push(plane[x][y].charCodeAt())
    return stack
  }
}

function interpret(code) {
  const plane = form2DPlane(code)
  let ins = plane[0][0]
  let i = 0
  let j = 0
  let stringFlag = false
  const directions = ['right', 'left', 'up', 'down']
  let direction = 'right'

  let stack = []
  let output = ''

  // 用 switch 性能不太好
  const program = {
    ['0']() { stack.push(0); },
    ['1']() { stack.push(1); },
    ['2']() { stack.push(2); },
    ['3']() { stack.push(3); },
    ['4']() { stack.push(4); },
    ['5']() { stack.push(5); },
    ['6']() { stack.push(6); },
    ['7']() { stack.push(7); },
    ['8']() { stack.push(8); },
    ['9']() { stack.push(9); },
    ['-']() { stack = operations.subtraction(stack) },
    ['+']() { stack = operations.addition(stack) },
    ['*']() { stack = operations.multiplication(stack) },
    ['/']() { stack = operations.division(stack) },
    ['%']() { stack = operations.modulo(stack) },
    ['!']() { stack = operations.not(stack) },
    ['`']() { stack = operations.greaterThan(stack) },
    ['>']() { direction = directions[0] },
    ['<']() { direction = directions[1] },
    ['^']() { direction = directions[2] },
    ['v']() { direction = directions[3] },
    ['?']() { direction = directions[Math.round((Math.random()*3))] },
    ['_']() { const a = stack.pop() || 0; direction = a === 0 ? directions[0] : directions[1] },
    ['|']() { const a = stack.pop() || 0; direction = a === 0 ? directions[3] : directions[2] },
    ['"']() { stringFlag = !stringFlag },
    [':']() { stack = operations.duplicate(stack) },
    ['\\']() { stack = operations.swap(stack) },
    ['$']() { stack.pop() },
    ['.']() { output += +(stack.pop()) },
    [',']() { output += String.fromCharCode(stack.pop()) },
    ['#']() { [i, j] = operations.move([i, j], direction) },
    ['p']() { operations.putCall(stack, plane) },
    ['g']() { stack = operations.getCall(stack, plane) },
    [' ']() {}
  }

  while(ins !== '@') {
    if (stringFlag && ins !== '"') {
      operations.push(stack, ins, stringFlag)
    } else {
      program[ins]()
    }
    [i, j] = operations.move([i, j], direction)
    ins = plane[i][j]
  }

  return output
}

exports.form2DPlane = form2DPlane
exports.operations = operations
exports.interpret = interpret