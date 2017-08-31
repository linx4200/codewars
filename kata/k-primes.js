// https://www.codewars.com/kata/k-primes

// Run test:
// npm-run mocha ../test/k-primes.js

// function unique (arr) {
//   return Array.from(new Set(arr))
// }


/**
 * 求出小于 n 的所有素数
 * 
 * @param {number} n 
 * @returns {Array}
 */
// function primes(end) {
//   const res = []

//   // 小于2都不是素数
//   if (end < 2) {
//     return res
//   }
//   for(let i = 2; i < end; i++) {
//     let flag = true
//     // 剪枝，100 = n1 * n2, 那么 n1 或者 n2 一定有个 <= 10
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         flag = false
//         break
//       }
//     }
//     if (flag) {
//       res.push(i)
//     }
//   }
//   return res
// }

// function countKprimes(k, start, end) {
//   const primeNums = primes(end / Math.pow(2, k - 1))

//   let i = 2
//   const ll = primeNums.length
//   const map = []
//   map[1] = primeNums

//   while(i <= k) {
//     const tmp = []

//     const last = map[i - 1]
//     const l = last.length

//     for(let ii = 0; ii < l; ii++) {
//       const max = Math.ceil(end / Math.pow(2, k - i))
//       for (let jj = 0; jj < ll; jj++) {
//         const prod = primeNums[jj] * last[ii]
//         if (i === k) {
//           if (prod <= end && prod >= start) {
//             tmp.push(prod)
//           } else if (prod > end) {
//             break
//           }
//         } else {
//           // 剪枝
//           if (prod <= max) {
//             tmp.push(prod)
//           } else {
//             break
//           }
//         }
//       }
//     }
//     map[i] = i === k ? unique(tmp).sort((a, b) => (a - b)) : unique(tmp)
//     i++
//   }
//   return map[k]
// }

// console.log(primes(1000))


/**
 * 计算出 n 由多少个素数相乘得出，返回那些素数
 * 
 * @param {number} n 
 * @returns {Array}
 */
function getPrimes(n) {
  const res = []
  for(let i = 2; i <= Math.sqrt(n); i++) {
    while(n % i === 0) {
      res.push(i)
      n = n / i
    }
  }
  if (n > 1) {
    res.push(n)
  }
  return res
}

function countKprimes(k, start, nd) {
  const res = []
  for(let i = start; i <= nd; i++) {
    const prims = getPrimes(i)
    if (prims.length === k){
      res.push(i)
    }
  }
  return res
}

function puzzle(s) {

}

exports.countKprimes = countKprimes
exports.puzzle = puzzle