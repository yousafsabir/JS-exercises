function maxSumOf(matrix) {
  const sums = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = i + 1; k <= matrix.length; k++) {
        for (let l = j + 1; l <= matrix[i].length; l++) {
          sums.push(
            matrix
              .slice(i, k)
              .map((v) => v.slice(j, l))
              .reduce(
                (acc, curr) =>
                  acc + curr.reduce((_acc, _curr) => _acc + _curr, 0),
                0,
              ),
          );
        }
      }
    }
  }
  return sums.reduce((acc, curr) => (acc > curr ? acc : curr), -Infinity);
}

console.log(
  maxSumOf([
    [-1, -2, -3],
    [4, 5, 6],
    [-7, -8, -9],
  ]),
);
console.log("Result: ", maxSumOf([[-1]]));

// Find The Max Sum Of Contiguous-Submatrix In a Matrix - Ultimate Version
// kata: https://www.codewars.com/kata/59ccf921a25c8c96460000ff/train/javascript
