// https://www.codewars.com/kata/56a73d2194505c29f600002d/train/javascript

// info: http://blog.2baxb.me/archives/588

// Run test:
// npm-run mocha ../test/regular-expression-check-if-divisible-by-0b111.js

// 不玩了，知道原理就算了，下面的正则是错的，打死也写不对

const solution = /^(0|1((000)*1|(0(01)*1(0(01)*(111)*0)*(0|(1(000)*1))))(111)*10*)$/

exports.solution = solution