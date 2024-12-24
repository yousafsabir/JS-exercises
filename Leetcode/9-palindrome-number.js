/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString();
  let stop = Math.floor(x.length / 2);
  for (let i = 0; i < stop; i++) {
    if (x[i] !== x[x.length - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome(1331));
