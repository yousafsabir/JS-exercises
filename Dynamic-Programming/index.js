// 1:
// Problem: return the nth fibonacci number

function nthFib1(n) {
  if (n <= 2) return 1;
  return nthFib1(n - 1) + nthFib1(n - 2);
}

function nthFib2(n) {
  let sequence = Array(n);

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      sequence[i] = 1;
      continue;
    }
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence[n - 1];
}

console.log(nthFib2(50));
