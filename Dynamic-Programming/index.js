// 1:
// Problem: return the nth fibonacci number

function nthFib1(n) {
  if (n <= 2) return 1;
  return nthFib1(n - 1) + nthFib1(n - 2);
}

console.time("ExecTime");
function nthFib2(n) {
  if (n <= 1) return 1;

  let lastTwoNumbers = [1, 1];

  for (let i = 0; i < n; i++) {
    lastTwoNumbers = [lastTwoNumbers[1], lastTwoNumbers[0] + lastTwoNumbers[1]];
  }

  return lastTwoNumbers[1];
}

console.log(nthFib2(50));
console.timeEnd("ExecTime");
