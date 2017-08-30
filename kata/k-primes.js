// https://www.codewars.com/kata/k-primes

// Run test:
// npm-run mocha ../test/k-primes.js

function unique (arr) {
  return Array.from(new Set(arr))
}

function primes(start, end) {
  const res = []

  // 小于2都不是素数
  if (end < 2) {
    return res
  }
  start = start <= 2 ? 2 : start
  for(let i = start; i < end; i++) {
    let flag = true
    // 剪枝，100 = n1 * n2, 那么 n1 或者 n2 一定有个 <= 10
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = false
      }
    }
    if (flag) {
      res.push(i)
    }
  }
  return res
}

function countKprimes(k, start, end) {
  const primeNums = primes(2, end)

  let i = 2
  const map = []
  map[1] = primeNums

  while(i <= k) {
    const tmp = []

    const last = map[i - 1]
    const l = last.length
    const ll = primeNums.length

    for(let ii = 0; ii < l; ii++) {
      for (let jj = 0; jj < ll; jj++) {
        const prod = primeNums[jj] * last[ii]
        if (prod <= end) {
          if (i === k && prod >= start) {
            tmp.push(prod)
          } else if (i !== k) {
            tmp.push(prod)
          }
        }
        if (prod > end) {
          break
        }
      }
    }
    map[i] = unique(tmp).sort((a, b) => (a - b))
    i++
  }
  return map[k]
}

exports.countKprimes = countKprimes