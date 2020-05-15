// https://www.hackerrank.com/challenges/beautiful-triplets/problem

// loop through the array
// array includes both arr[x]+diff AND arr[x]+(2*diff)
// then increase triplet count

function beautifulTriplets(difference, arr) {
  let triplets = 0;
  for (let x = 0; x < arr.length; x++) {
    if (arr.includes(arr[x] + difference) && arr.includes(arr[x] + (difference*2))) {
      triplets++;
    }
  }
  return triplets;
}

beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]);