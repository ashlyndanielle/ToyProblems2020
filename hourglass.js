function hourglassSum(arr) {
  // psuedo code at bottom
  let hourglassSums = [];
  // loop through y-axis
  for (let y = 0; y < arr.length; y++) {
    // make sure there's enough vertical space
    if (arr[y+2] !== undefined) {
      // loop through x-axis
      for (let x = 0; x < arr.length; x++) {
        // make sure there's enough horizontal space
        if (arr[y][x+2] !== undefined) {
          // build hourglass and add sum to sums array
          let hourglass = [arr[y][x], arr[y][x+1], arr[y][x+2], arr[y+1][x+1], arr[y+2][x], arr[y+2][x+1], arr[y+2][x+2]]
          hourglassSums.push(hourglass.reduce((prev, curr) => {
            return prev + curr;
          }));
        }
      }
    }
  }
  return Math.max(...hourglassSums);
  // define hourglass shape
  // hourglass = arr[y][x], arr[y][x+1], arr[y][x+2]
  //                        arr[y+1][x+1]
  //           arr[y+2][x], arr[y+2][x+1], arr[y+2][x+2]
  // account for boundaries
  // if arr[y+2] {
  //    if arr[x+2] {
  //      sum hourglass
  //    } else {
  //      we've hit the edge, move down a line
  //    }
  //    we've hit the bottom, time to return
  // }
}

const grid = [[ 1, 1, 1, 0, 0, 0 ],
              [ 0, 1, 0, 0, 0, 0 ],
              [ 1, 1, 1, 0, 0, 0 ],
              [ 0, 0, 2, 4, 4, 0 ],
              [ 0, 0, 0, 2, 0, 0 ],
              [ 0, 0, 1, 2, 4, 0 ]]
hourglassSum(grid);