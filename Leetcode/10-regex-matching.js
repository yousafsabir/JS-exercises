/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p === ".*" || p === "*.") return true;

  // check if p is just a regular string
  if (!/[.*]/.test(p)) return s === p;

  // Constructing the regex
  let regex = "^";
  for (let i = 0; i < p.length; i++) {
    if (p[i] === ".") regex += "\\w{1}";
    else if (p[i] === "*" && p[i - 1] === ".")
      regex = regex.slice(0, regex.length - 3);
    else regex += p[i];
  }
  regex += "$";
  let regexp = new RegExp(regex);
  return regexp.test(s);
};

console.log(isMatch("abcabcdefdefa", "abc*def*."));
console.log(isMatch("aab", "c*a*b"));
