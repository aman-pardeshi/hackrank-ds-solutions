// const arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];

const arr = [
  [3, 7, -3, 0, 1, 8],
  [1, -4, -7, -8, -6, 5],
  [-8, 1, 3, 3, 5, 7],
  [-2, 4, 3, 1, 2, 7],
  [2, 4, -5, 1, 8, 4],
  [5, -7, 6, 5, 2, 8],
];

//0 1 2 7 12 13 14    //6 7 8 13 18 19 20
//1 2 3 8 13 14 15    //7 8 9 14 19 20 21
//2 3 4 9 14 15 16    //8 9 10 15 20 21 22
//3 4 5 10 15 16 17   //9 10 11 16 21 22 23

//4 5 10 11 16 17

let longArr = arr.flat();
let result = [];

for (let i = 0, len = longArr.length; i < len; i++) {
  if (i == 4 || i == 5 || i == 10 || i == 11 || i == 16 || i == 17) {
    // console.log(i);
  } else {
    if (i < 22) {
      console.log(i);
      let temp =
        longArr[i] +
        longArr[i + 1] +
        longArr[i + 2] +
        longArr[i + 7] +
        longArr[i + 12] +
        longArr[i + 13] +
        longArr[i + 14];

      result.push(temp);
    }
  }
}
console.log(result);
console.log(Math.max(...result));
