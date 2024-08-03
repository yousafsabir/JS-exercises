// link: https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (s.length === 1) return s;

  let longestPalindromeYet = "";

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      let substr = s.substring(i, j);
      if (
        substr === reverseStr(substr) &&
        substr.length > longestPalindromeYet.length
      ) {
        longestPalindromeYet = substr;
      }
    }
  }

  return longestPalindromeYet;
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseStr(s) {
  return s.split("").reduce((acc, curr) => curr + acc, "");
}

longestPalindrome("cabbacdef");
