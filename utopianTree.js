// https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
  let height = 1;
  if (n === 0) return height;
  for (let x = 1; x <= n; x++) {
      x % 2 === 0 ? height++ : height*=2;
  }
  return height;
}