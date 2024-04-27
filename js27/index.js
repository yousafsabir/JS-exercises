// kata: https://www.codewars.com/kata/5a3af5b1ee1aaeabfe000084/train/javascript

function sumOfSquares(n) {
  let list = [];
  let idx = n;
  while (list.reduce((acc, curr) => acc + curr, 0) < n) {
    if (
      Math.sqrt(idx) % 1 === 0 &&
      list.reduce((acc, curr) => acc + curr, 0) + idx <= n
    ) {
      list.push(idx);
    }
    if (idx === 1) {
      idx = n;
      continue;
    }
    idx--;
  }
  console.log(list);
  return list.length;
}

// console.log(sumOfSquares(19));

function sumIntervals(intervals) {
  // finding overlapping intervals
  let iter = 0;
  for (let [a, b] of intervals) {
    let innerIter = 0;
    for (let [c, d] of intervals) {
      console.log("i: ", iter, [a, b]);
      console.log("    j: ", innerIter, [c, d]);
      if (iter !== innerIter) {
        // if same interval is
        if (a === c && b === d) {
          intervals.splice(innerIter, 1);
          innerIter > -1 && innerIter--;
        }
        // check if overlapping
        if (a < d && b >= c) {
          console.log("    ", [c, d]);
          intervals.splice(j, 1);
          innerIter > -1 && innerIter--;
          intervals[i] = [c < a ? c : a, d > b ? d : b];
          [a, b] = intervals[i];
          console.log("    ", intervals);
        }
      }
      innerIter++;
    }
    iter++;
  }
  return intervals.reduce((acc, curr) => acc + Math.abs(curr[1] - curr[0]), 0);
}

console.log(
  sumIntervals([
    [1, 4],
    [3, 6],
    [5, 8],
    [7, 10],
    [9, 12],
  ]),
);
