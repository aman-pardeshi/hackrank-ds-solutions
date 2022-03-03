const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < 4; i++) {
  let temp = arr.shift();
  arr.push(temp);
}

console.log(arr);
