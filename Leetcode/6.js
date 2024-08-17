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

    // toggle forwardFlag
    if (currentRow === numRows) {
      forwardFlag = false;
    } else if (currentRow === 1) {
      forwardFlag = true;
    }

    // inc/dec currentRow
    currentRow += forwardFlag ? 1 : -1;
  }

  return resultArr.reduce((acc, curr) => acc + curr.join(""), "");
}

console.log(convert("PAYPALISHIRING", 3));
