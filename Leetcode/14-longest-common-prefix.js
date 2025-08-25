/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let longestPrefix = "";

  if (!strs.length) return longestPrefix;

  longestPrefix = strs[0];
  let longestPrefixIndex = longestPrefix.length;

  for (let i = 1; i < strs.length; i++) {
    let currentWord = strs[i];

    for (let j = 0; j < longestPrefixIndex; j++) {
      if (currentWord[j] !== longestPrefix[j]) {
        longestPrefixIndex = j;
        break;
      }
    }
    if (longestPrefix >= 0) break;
  }

  return longestPrefix.slice(0, longestPrefixIndex);
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
