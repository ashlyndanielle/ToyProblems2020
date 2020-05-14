// https://www.hackerrank.com/challenges/the-time-in-words/problem?h_r=next-challenge&h_v=zen
// function with notes at bottom


function timeInWords(h, m) {
  const singles = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const originalMin = m;
  let hour = '';
  let min = '';
  let time = '';
  
  if (m > 30) {
    m = 60-m;
    h++;
  }
  h < 10 ? hour = singles[h] : hour = tens[h%10];

  if (m === 30) {
    min = "half";
  } else if (m === 15) {
    min = "quarter";
  } else if (m < 10) {
    if (m === 1) min = singles[m] + ' minute'
    else min = singles[m] + ' minutes';
  } else if (m >= 10 && m < 20) {
    min = tens[m%10] + ' minutes';
  } else if (m >= 20 && m.toString().substr(-1) === '0') {
    min = "twenty minutes";
  } else {
    min = `twenty ${singles[+m.toString().substr(-1)]} minutes`;
  }

  if (m === 0) {
    time = `${hour} o' clock`;
  } else if (originalMin <= 30) {
    time = `${min} past ${hour}`;
  } else {
    time = `${min} to ${hour}`;
  }

  console.log(time);
  return time;
}


timeInWords(1, 1);














function timeInWordsWithNotes(h, m) {
  // create arrays: [one - nine], [ten - nineteen], [twenty - fifty];
  // account for indexing (blank string at zero) and quarter (15)
  const singles = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const originalMin = m;
  let hour = '';
  let min = '';
  let time = '';
  
  if (m > 30) {
    m = 60-m;
    h++;
  }
  h < 10 ? hour = singles[h] : hour = tens[h%10];
  // formatting:
  // h: 
  //  * if h < 10 return arr1[h]
  //  * if h > 10 return arr2[h%10]
  // m:
  // * if m > 30  m = 60 - m
  //  * if m = 30 return "half"
  if (m === 30) {
    min = "half";
    //  * if m < 10 return arr1[m]
  } else if (m === 15) {
    min = "quarter";
  } else if (m < 10) {
    if (m === 1) {
      min = singles[m] + ' minute'
    } else
    min = singles[m] + ' minutes';
    //  * if m < 20 return arr2[m%10]
  } else if (m >= 10 && m < 20) {
    min = tens[m%10] + ' minutes';
    //  * if m.toString().substr(-1) == 0 return arr3[m/10];
  } else if (m >= 20 && m.toString().substr(-1) === '0') {
    min = "twenty minutes";
  } else {
    //  * else m-word = arr1[+m.toString().split('').substr(0, 1)] + arr1[+m.toString().split('').substr(-1)]
    min = `twenty ${singles[+m.toString().substr(-1)]} minutes`;
  }
  // check:
  // * if m = 00 return `${hour} o' clock`
  if (m === 0) {
    time = `${hour} o' clock`;
  } else if (originalMin <= 30) {
    time = `${min} past ${hour}`;
  } else {
    time = `${min} to ${hour}`;
  }
  // * if m <= 30 return `${min} past ${hour}`
  // * if m > 30 
  //    * m = 60 - m
  //    * return `${min} to ${hour}`

  console.log('hour:', hour);
  console.log('min:', min);
  console.log('time:', time);
  return time;
}