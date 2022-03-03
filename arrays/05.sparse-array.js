const strings = ['aba', 'baba', 'aba', 'xzxb'];

const queries = ['aba', 'xzxb', 'ab'];

let result = queries.map((query) => {
  let count = 0;
  for (let i = 0, len = strings.length; i < len; i++) {
    if (strings[i] === query) {
      count++;
    }
  }
  return count;
});

console.log(result);
