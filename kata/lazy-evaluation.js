// https://www.codewars.com/kata/53c2502d1dfa43f6420001e6

function Lazy() {
  this.fns = []
}

Lazy.prototype.add = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  this.fns.push({ fn, args })
  return this
}

Lazy.prototype.invoke = function () {
  let res = Array.prototype.slice.call(arguments)[0]
  for (let i = 0, l = this.fns.length; i < l; i++) {
    const fnObj = this.fns[i]
    const args = Array.prototype.concat([], fnObj.args, res)
    res = fnObj.fn.apply(null, args)
  }
  return res
}

// ======= test case ==========

// function max () {
//   return Math.max.apply(null, arguments)
// }

// function filterNumbers () {
//   return Array.prototype.filter.call(arguments, function(value) {
//     return isNumeric(value)
//   })
// }

// function isNumeric(n) {
//   return !isNaN(n) && Number(n) === n
// }

// function filterRange (min, max) {
//   var args = Array.prototype.slice.call(arguments, 2)
//   return Array.prototype.filter.call(args, function(value) {
//     return min <= value && value <= max
//   })
// }

// const evaluation = (new Lazy())
//       .add(filterNumbers)
//       .add(filterRange, 1, 3)
//       .add(max)

// evaluation.invoke([ 1, '3', [ 2 ], {}, 4, 2 ]) // 2
// evaluation.invoke([ 1, 8, 6, [], '7', -1, { v: 5 }, 4 ]) // 1
