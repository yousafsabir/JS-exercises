/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  s = s.trim();
  let int = "";
  let sign = null;
  let lowerLimit = -2147483648; // -2^31
  let upperLimit = 2147483647; // 2^31 - 1

  for (let i = 0; i < s.length; i++) {
    if (!int && sign === null && (s[i] === "-" || s[i] === "+")) {
      sign = s[i] === "-" ? true : false;
      continue;
    }
    if (/[^0-9]/.test(s[i])) break;
    int += s[i];
  }
  if (!int) return 0;
  int = parseInt(int) * (sign ? -1 : 1);
  if (int < lowerLimit) return lowerLimit;
  if (int > upperLimit) return upperLimit;
  return int;
}

console.log(parseInt("00001"));
