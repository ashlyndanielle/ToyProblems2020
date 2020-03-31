// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(lowerLimit, upperLimit, divisor) {
  let beautyCount = 0;
  for (let x = lowerLimit; x <= upperLimit; x++) {
      let reverse = Number(x.toString().split('').reverse().join(''));
      if ((x - reverse) % divisor === 0) beautyCount++;
  }
  return beautyCount;
}