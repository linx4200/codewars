// https://www.codewars.com/kata/51e000d070fe4414000003f0/

function solution(time) {
  const regexp = /^(?=\d{3})(\d{1,2})?(\d{2})$/g;
  const match = regexp.exec(time);
  if (match) {
    return `${match[1]}:${match[2]}`
  } else {
    throw "Error!"
  }
}
