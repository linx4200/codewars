// https://www.codewars.com/kata/57680d0128ed87c94f000bfd/

function checkWord( board, word ){
  let idx = 0
  let i = 0
  let j = 0
  let b = JSON.parse(JSON.stringify(board))
  let rows = b.length
  let columns = b[0].length
  let stack = []

  while (i < rows) {
    if (b[i][j] === word[idx]) {
      const next = word[idx + 1]
      console.log('===stack===', i, j, stack)
      if (next === undefined) {
        // console.log('==true===')
        return true
      }

      if (b[i-1] && b[i-1][j-1] === next) {
        idx++
        stack.push([i, j])
        b[i][j] = 'null'
        i = i - 1
        j = j - 1
        continue
      }
      if (b[i] && b[i][j-1] === next) {
        idx++
        stack.push([i, j])
        b[i][j] = 'null'
        j = j - 1
        continue
      }
      if (b[i+1] && b[i+1][j-1] === next) {
        idx++
        stack.push([i, j])
        b[i][j] = 'null'
        i = i + 1
        j = j - 1
        continue
      }
      if (b[i-1] && b[i-1][j] === next) {
        idx++
        stack.push([i, j])
        b[i][j] = 'null'
        i = i - 1
        continue
      }
      if (b[i+1] && b[i+1][j] === next) {
        idx++
        stack.push([i, j])
        b[i][j] = 'null'
        i = i + 1
        continue
      }
      if (b[i-1] && b[i-1][j+1] === next) {
        idx++
        stack.push([i, j])
        b[i][j] = 'null'
        i = i - 1
        j = j + 1
        continue
      }
      if (b[i] && b[i][j+1] === next) {
        idx++
        stack.push([i, j])
        b[i][j] = 'null'
        j = j + 1
        continue
      }
      if (b[i+1] && b[i+1][j+1] === next) {
        idx++
        stack.push([i, j])
        b[i][j] = 'null'
        i = i + 1
        j = j + 1
        continue
      }

      const last = stack.pop()
      if (last) {
        b[i][j] = 'null';
        [i, j] = last
        idx = idx - 1
        b[i][j] = word[idx]
        continue
      }
    }

    idx = 0
    b = JSON.parse(JSON.stringify(board))
    // console.log('==b===', b)
    if (j < columns - 1) {
      j++
    } else {
      i++
      j = 0
    }
  }

  // console.log('==false===')
  return false
}

// const testBoard = [
//   ['E','A','R','A'],
//   ['N','L','E','C'],
//   ['I','A','I','S'],
//   ['B','Y','O','R']
// ]

const testBoard = [
  ['N','B','R','A'],
  ['C','R','P','A'],
  ['L','A','A','P'],
  ['S','O','A','A']
]

// checkWord( testBoard, 'C') // true
// checkWord( testBoard, 'EAR' ) // true
// checkWord( testBoard, 'EARS' ) // false
// checkWord( testBoard, 'BAILER' ) // true 
// checkWord( testBoard, 'RSCAREIOYBAILNEA' ) // true
// checkWord( testBoard, 'CEREAL' ) // false
// checkWord( testBoard, 'ROBES' ) // false
// checkWord( testBoard, 'BAKER' ) // false
// checkWord( testBoard, 'CARS' ) // false

// checkWord( testBoard, 'ARAARAS') // true
checkWord( testBoard, 'PARAPARAS' ) // true
// checkWord( testBoard, 'EARS' ) // false
// checkWord( testBoard, 'BAILER' ) // true 
// checkWord( testBoard, 'RSCAREIOYBAILNEA' ) // true
// checkWord( testBoard, 'CEREAL' ) // false
// checkWord( testBoard, 'ROBES' ) // false
// checkWord( testBoard, 'BAKER' ) // false
// checkWord( testBoard, 'CARS' ) // false

// console.log('==res===', res)



