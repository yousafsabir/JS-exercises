/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  x = x.toString().split("");
  let sign = false;
  if (x[0] === "-") {
    x.unshift();
    sign = true;
  }
  x = parseInt(x.reverse().join(""));
  if (sign) x *= -1;

  if (x < -2147483648 || x > 2147483647) return 0;
  return x;
}
