// https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
  if (arr.length === 1) return 0;
  // build object with value and number of occurances
  let pairs = {};
  for (let x in arr) {
    pairs[arr[x]] ? pairs[arr[x]]++ : pairs[arr[x]] = 1;
  }
  // find highest repeating number
  let mostCommon = Math.max(...Object.values(pairs));
  // return original length minus number of most common
  // repeats to find delete count
  return arr.length - mostCommon;
}