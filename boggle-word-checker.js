// https://www.codewars.com/kata/57680d0128ed87c94f000bfd/

function checkWord( board, word ){
  const ll = word.length
  let idx = 0
  let flag = false
  let i = 0
  let j = 0
  let rows = board.length
  let columns = board[0].length
  let stack = []
  let b = board

  while (i < rows) {
    if (b[i][j] === word[idx]) {
      stack.push([i, j])
      const next = word[idx + 1]

      // console.log('==next===', i, j, word[idx], next)

      if (next === undefined) return true

      if (b[i-1] && b[i-1][j-1] === next) {
        idx++
        b[i][j] = 'null'
        i = i - 1
        j = j - 1
        continue
      }
      if (b[i] && b[i][j-1] === next) {
        idx++
        b[i][j] = 'null'
        j = j - 1
        continue
      }
      if (b[i+1] && b[i+1][j-1] === next) {
        idx++
        b[i][j] = 'null'
        i = i + 1
        j = j - 1
        continue
      }
      if (b[i-1] && b[i-1][j] === next) {
        idx++
        b[i][j] = 'null'
        i = i - 1
        continue
      }
      if (b[i+1] && b[i+1][j] === next) {
        idx++
        b[i][j] = 'null'
        i = i + 1
        continue
      }
      if (b[i-1] && b[i-1][j+1] === next) {
        idx++
        b[i][j] = 'null'
        i = i - 1
        j = j + 1
        continue
      }
      if (b[i] && b[i][j+1] === next) {
        idx++
        b[i][j] = 'null'
        j = j + 1
        continue
      }
      if (b[i+1] && b[i+1][j+1] === next) {
        idx++
        b[i][j] = 'null'
        i = i + 1
        j = j + 1
        continue
      }
      // break
    }

    b = board

    if (j < columns) {
      j++
    } else {
      i++
      j = 0
    }
  }
  return flag
}

const testBoard = [
  ['E','A','R','A'],
  ['N','L','E','C'],
  ['I','A','I','S'],
  ['B','Y','O','R']
]

const res = checkWord(testBoard, 'C')
// const res = checkWord(testBoard, 'EAR' ) // true
// const res = checkWord( testBoard, 'EARS' ) // false
// const res = checkWord( testBoard, 'BAILER' ) // true 
// const res = checkWord( testBoard, 'RSCAREIOYBAILNEA' ) // true
// const res = checkWord( testBoard, 'CEREAL' ) // false
// const res = checkWord( testBoard, 'ROBES' ) // false
// const res = checkWord( testBoard, 'BAKER' ) // false
// const res = checkWord( testBoard, 'CARS' ) // false

console.log('==res===', res)



