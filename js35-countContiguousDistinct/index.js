// countContiguousDistinct
// kata: https://www.codewars.com/kata/5945f0c207693bc53100006b/train/javascript/

function countContiguousDistinct(k, arr) {
  let res = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    res.push([...new Set(arr.slice(i, i + k))].length);
  }
  return res;
}

console.log(countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3]));

// P.S: code works but timeouts on codewars
