// https://www.codewars.com/kata/55911ef14065454c75000062/

const assert = require('chai').assert

// 这题要注意超出精读范围的数，不能简单的相乘
function multiply(a, b) {
  const aa = a.split('').reverse()
  const bb = b.split('').reverse()
  const res = []

  // 先把答案的每一位乘积先算出来，不考虑进位
  for(let i = 0, l = aa.length; i < l; i++) {
    for (let j = 0, ll = bb.length; j < ll; j++) {
      const mul = aa[i] * bb[j]
      res[i + j] = res[i + j] ? res[i + j] + mul : mul
    }
  }

  // 再处理进位
  for(let k = 0, l = res.length; k < l; k++) {
    const c = Math.floor(res[k]/10)
    res[k] = res[k] % 10
    res[k + 1] = res[k + 1] || 0
    res[k + 1] += c
  }
  return res.reverse().join('').replace(/^0+(?=\d)/g, '')
}

assert.equal(multiply('2', '3'), '6')
assert.equal(multiply('2', '0'), '0')
assert.equal(multiply('20000', '0'), '0')
assert.equal(multiply('123321', '9088'), '1120741248')
assert.equal(multiply('58608473622772837728372827', '7586374672263726736374'), '444625839871840560024489175424316205566214109298')
