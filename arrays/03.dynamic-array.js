import { readFileSync } from 'fs';

const queries = readFileSync('./03.input.txt', 'utf8')
  .split('\r\n')
  .map((x) => x.split(' ').map((y) => parseInt(y)));

// console.log(data);
const n = 100;
// const queries = [
//   [1, 0, 5],
//   [1, 1, 7],
//   [1, 0, 3],
//   [2, 1, 0],
//   [2, 1, 1],
// ];

let lastAnswer = 0;
let arr = new Array(n);
let result = [];

for (const query of queries) {
  let x = query[1];
  let y = query[2];

  if (query[0] === 1) {
    let idx = (x ^ lastAnswer) % n;

    if (arr[idx]) {
      arr[idx].push(y);
    } else {
      arr[idx] = [y];
    }
  } else {
    let idx = (x ^ lastAnswer) % n;
    lastAnswer = arr[idx][y % arr[idx].length];
    // console.log(lastAnswer);
    result.push(lastAnswer);
  }
}

console.log(result);
