function reverseArray(a) {
  // Write your code here
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.unshift(a[i]);
  }
  return result;
}
