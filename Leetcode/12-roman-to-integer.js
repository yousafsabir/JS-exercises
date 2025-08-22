let dictionary = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  D: 500,
  CD: 400,
  CM: 900,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let twoLetters = s[i] + s[i + 1];
    if (i < s.length - 1 && dictionary[twoLetters]) {
      result += dictionary[twoLetters];
      i++;
    } else result += dictionary[s[i]];
  }

  return result;
};
