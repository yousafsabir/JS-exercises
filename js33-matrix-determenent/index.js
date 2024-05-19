// Matrix Determenant
// kata: https://www.codewars.com/kata/52a382ee44408cea2500074c/train/javascript

function determinant(m) {
  if (m.length === 1) return m[0][0];
  if (m.length === 2) return m[0][0] * m[1][1] - m[1][0] * m[0][1];

  return m[0].reduce(
    (acc, colVal, colIdx) =>
      acc +
      (colIdx % 2 === 0 ? 1 : -1) *
        colVal *
        determinant(
          m
            .filter((_, i) => i !== 0)
            .map((v) => v.filter((_, j) => j !== colIdx)),
        ),
    0,
  );
}

const matrix = [
  [1, 2],
  [3, 4],
];

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const matrix4 = [
  [2, 5, 3],
  [1, -2, -1],
  [1, 3, 4],
];

console.time("label");
// console.log(determinant([[1]]));
// console.log(determinant(matrix));
// console.log(determinant(matrix2));
console.log(determinant(matrix3));
// console.log(determinant2(matrix4));
console.timeEnd("label");
