// https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = function(n) {
  return Array.from(n.toString(2)).reduce((prev, cur) => +prev + +cur, 0)
}