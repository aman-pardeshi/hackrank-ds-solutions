import fs from 'fs';
const n = 10000000;
const queries = [
  [2, 3, 603],
  [1, 1, 286],
  [4, 4, 882],
];

let result = new Array(n + 1);

queries.forEach(([start, end, value]) => {
  result[start] = result[start] || { start: 0, end: 0 };
  result[start].start += value;

  result[end] = result[end] || { start: 0, end: 0 };
  result[end].end += value;
});

let current = 0;
let max = 0;
for (var i = 0; i < n; i++) {
  if (result[i]) {
    current += result[i].start;
    if (current > max) {
      max = current;
    }
    current -= result[i].end;
  }
}

console.log(max);
//2497169732
