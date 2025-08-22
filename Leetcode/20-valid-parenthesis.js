function validParentheses(str) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };

  for (let char of str) {
    if (char in map) {
      if (!stack.length || stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return !stack.length;
}

console.log(validParentheses("{[]}"));
