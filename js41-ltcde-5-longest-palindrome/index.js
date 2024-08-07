// link: https://leetcode.com/problems/longest-palindromic-substring/

// /**
//  * @param {string} s
//  * @return {string}
//  */
// function longestPalindrome(s) {
//   if (s.length === 1) return s;

//   let longestPalindromeYet = "";

//   for (let i = 0; i < s.length - 1; i++) {
//     for (let j = i + 1; j < s.length + 1; j++) {
//       let substr = s.substring(i, j);
//       if (
//         substr === reversedStr(substr) &&
//         substr.length > longestPalindromeYet.length
//       ) {
//         longestPalindromeYet = substr;
//       }
//     }
//   }

//   return longestPalindromeYet;
// }

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (s === reversedStr(s)) return s;

  let longestPalindromeYet = s[0];

  let i = 0;

  while (i < s.length) {
    let p = ""; // palindrome test substring
    let x = i ? i - 1 : i;
    let y = i + 1;
    // check for odd char count palindrome
    while (x >= 0 && y < s.length) {
      if (s.substring(x, y + 1) === reversedStr(s.substring(x, y + 1))) {
        p = s.substring(x, y + 1);
      } else if (!p && i !== 0 && x === i - 1) {
        // one time execution to set x for even char palindrome
        x++;
        continue;
      } else break;

      x -= 1;
      y += 1;
    }

    // check if p is a palindrome
    if (p.length && p.length > longestPalindromeYet.length)
      longestPalindromeYet = p;
    i++; // outer index increment
  }

  return longestPalindromeYet;
}

/**
 * @param {string} s
 * @return {string}
 */
function reversedStr(s) {
  return s.split("").reduce((acc, curr) => curr + acc, "");
}

console.log(
  longestPalindrome(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  ),
);
