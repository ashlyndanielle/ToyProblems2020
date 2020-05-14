// https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(num) {
  let divisors = 0;
  // split number into individual digits
  num.toString().split('').forEach(digit => {
    // mod number by each digit
    // if divisible, increase divisor count
    if (num % digit === 0) divisors++;
  })
  return divisors;
}

findDigits(111)