// 1:
// Problem: return the nth fibonacci number

function nthFib(n) {
  if (n <= 2) return 1;
  return nthFib(n - 1) + nthFib(n - 2);
}

console.log(nthFib(7));
