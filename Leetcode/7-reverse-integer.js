/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  let int = x.toString().split("");
  let sign = false;
  if (int[0] === "-") {
    int.unshift();
    sign = true;
  }
  int = parseInt(int.reverse().join(""));
  if (sign) int *= -1;

  if (int < -2147483648 || int > 2147483647) return 0;
  return int;
}
-2147483648;
2147483647;
