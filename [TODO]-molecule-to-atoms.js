// https://www.codewars.com/kata/52f831fa9d332c6591000511/

// Failed...

'use strict'

function parseMolecule(formula) {
  const res = {}
  let match = null

  const pattern1 = /\((\w+)\)(\d+)\d+?/g
  do {
    match = pattern1.exec(formula)
    if (match) {
      if (match[1] && match[2]) {
        match[1].match(/[A-Z][a-z]?\d+?/g).map((ele) => {
          if (/\d+/g.test(ele)) {
            res[ele.slice(0, ele.length - 1)] = +ele[ele.length - 1] * +match[2]
          }
          else {
            res[ele] = +match[2]
          }
        })
      }
    }
  } while (match)

  const pattern2 = /\[(\w*)?\((\w+)\)\d+\](\d+)/g
  do {
    match = pattern2.exec(formula)
    if (match) {
      // 小括号内的
      match[2].match(/[A-Z][a-z]?\d+?/g).map((ele) => {
        if (/\d+/g.test(ele)) {
          const name = ele.slice(0, ele.length - 1)
          res[name] = res[name] * +match[3]
        }
        else {
          res[ele] *= +match[3]
        }
      })
      
      // 小括号外的
      match[1].match(/[A-Z][a-z]?\d+?/g).map((ele) => {
        if (/\d+/g.test(ele)) {
          const name = ele.slice(0, ele.length - 1)
          res[name] = res[name] 
          res[name] = (res[name] || 0) + ele[ele.length - 1] * +match[3]
        }
        else {
          res[ele] = (res[ele] || 0) + +match[3]
        }
      })
    }
  } while (match)
  
  formula = formula.replace(pattern2, '').replace(pattern1, '')

  const pattern3 = /([A-Z][a-z]?)(\d+)?/g
  do {
    match = pattern3.exec(formula)
    if (match) {
      res[match[1]] = res[match[1]] || 0
      res[match[1]] += +match[2] || 1
    }
  } while (match)

  return res
}

// const water = 'H2O'
// parseMolecule(water) // return {H: 2, O: 1}

// const glucose = 'C6H12O6'
// parseMolecule(glucose) // return {C: 6, H:12, O: 6}

// const magnesiumHydroxide = 'Mg(OH)2'
// parseMolecule(magnesiumHydroxide) // return {Mg: 1, O: 2, H: 2}

// const fremySalt = 'K4[O2N(SO3)2]2'
// parseMolecule(fremySalt) // return {K: 4, O: 16, N: 2, S: 4}

// const fremySalt111 = 'K4ON2[ON(SMg3)2]3'
// parseMolecule(fremySalt111) // return {K: 4, O: 4, N: 5, S: 6, Mg: 18}
