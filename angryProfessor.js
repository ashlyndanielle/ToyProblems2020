// https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(k, a) {
  let onTime = 0;
  // loop through a and count how many are on time
  // return 'NO' when onTime = k else return 'YES'
  for (let x = 0; x < a.length; x++) {
    if (onTime >= k) return "NO";
    if (a[x] <= 0) onTime++;
  }
  return "YES";
}


// other's solution
function angryProfessor(k, a) {
  const onTime = a.filter(i => i <= 0)
  return onTime.length >= k ? 'NO' : 'YES'
}