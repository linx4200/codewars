// https://www.codewars.com/kata/consecutive-count/

// Run test:
// npm-run mocha ../test/consecutive-count.js

function getConsectiveItems(items, key) {
  let count = 0
  let regex = new RegExp(`${key}+`, 'g')
  let res = regex.exec(items)

  while (res) {
    count = res[0].length > count ? res[0].length : count
    res = regex.exec(items)
  }
  return count
}

exports.getConsectiveItems = getConsectiveItems