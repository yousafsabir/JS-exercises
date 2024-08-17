// Zigzag Conversion
// https://leetcode.com/problems/zigzag-conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  // if numRows is 1, we return s as is
  if (numRows === 1) return s;

  let resultArr = [];

  let forwardFlag = true;
  let currentRow = 1;
  for (let letter of s) {
    if (!resultArr[currentRow - 1]) resultArr[currentRow - 1] = [];
    resultArr[currentRow - 1].push(letter);

    // toggle forwardFlag & inc/dec currentRow
    if (forwardFlag) {
      if (currentRow !== numRows) {
        currentRow += 1;
      } else {
        forwardFlag = false;
        if (currentRow > 1) currentRow -= 1;
      }
    } else {
      if (currentRow !== 1) {
        currentRow -= 1;
      } else {
        forwardFlag = true;
        if (numRows > 1) currentRow += 1;
      }
    }
  }

  return resultArr.reduce((acc, curr) => acc + curr.join(""), "");
}

console.log(convert("PAYPALISHIRING", 3));
