function maxSumOf(matrix) {
  let maxSum = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = i; k < matrix.length; k++) {
        for (let l = j; l < matrix[i].length; l++) {
          let subMatrixSum = 0;
          for (let m = i; m <= k; m++) {
            for (let n = j; n <= l; n++) {
              subMatrixSum += matrix[m][n];
            }
          }
          if (subMatrixSum > maxSum) maxSum = subMatrixSum;
        }
      }
    }
  }
  return maxSum;
}

function AhmadsMaxSumOf(matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const sums = Array.from({ length: m + 1 }, (_) => Array(n).fill(0));
  let r = 0;
  for (let i = 0; i < m; i++) {
    const si = sums[i + 1];
    for (let j = 0; j < n; j++) {
      si[j] = sums[i][j] + matrix[i][j];
    }
    for (let k = 0; k <= i; k++) {
      let s = 0;
      const sk = sums[k];
      for (let j = 0; j < n; j++) {
        s += si[j] - sk[j];
        if (s < 0) s = 0;
        if (r < s) r = s;
      }
    }
  }
  console.log(sums);
  return r;
}

console.log(
  AhmadsMaxSumOf([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
// console.log("Result: ", maxSumOf([[1, 2, 3]]));

// Find The Max Sum Of Contiguous-Submatrix In a Matrix - Ultimate Version
// kata: https://www.codewars.com/kata/59ccf921a25c8c96460000ff/train/javascript
