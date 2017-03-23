// https://www.codewars.com/kata/55911ef14065454c75000062/

// 这题要注意超出精读范围的数，不能简单的相乘
function multiply(a, b) {
  let aa
  let bb
  if (a.length < b.length) {
    aa = a.split('').reverse()
    bb = b.split('').reverse()
  } else {
    aa = b.split('').reverse()
    bb = a.split('').reverse()
  }
  let base = 0
  const bl = bb.length
  aa = aa.map((val) => {
    const tmp = bb.map((v, i) => {
      const mul = (+v * +val + +base).toString().split('')
      if (i === bl - 1) {
        base = 0
        return mul
      }
      if (mul.length === 1) {
        base = 0
        return mul[0]
      } else {
        base = mul[0]
        return mul[1]
      }
    })
    let last = tmp.pop()
    if (last.length > 1) tmp.push(last[1])
    tmp.push(last[0])
    return tmp
  })

  aa = aa.map((arr, idx) => {
    return (new Array(idx).fill('0')).concat(arr)
  })
  console.log(aa)
  base = 0
  const res = aa[aa.length - 1].map((aaa, idx) => {
    let val = 0
    aa.map((curr) => {
      val += (curr[idx] ? +curr[idx] : 0)
    })
    val = (+val + +base).toString().split('')
    if (val.length === 1) {
      base = 0
      return val[0]
    }
    base = val[0]
    return val[1]
  }, 0)

  return res.reverse().join('').replace(/^0+(?=\d)/g, '')
}

// console.log(multiply('2', '3')) // '6'
// console.log(multiply('2', '0')) // '0'
// console.log(multiply('20000', '0')) // '0'
console.log(multiply('58608473622772837728372827', '7586374672263726736374')) // '444625839871840559930507365023406205566214109298'
                                                          6205566214109298
//444625839871840560024489175424316205566214109298
//44462583987184055993050736502340 6205566214109298
