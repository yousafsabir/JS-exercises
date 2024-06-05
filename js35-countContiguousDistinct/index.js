// countContiguousDistinct
// kata: https://www.codewars.com/kata/5945f0c207693bc53100006b/train/javascript/

console.time("duration:");

function countContiguousDistinct(k, arr) {
  let res = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    let curr = [];
    for (let j = i; j <= i + k - 1; j++) {
      if (!curr.includes(arr[j])) {
        curr.push(arr[j]);
      }
    }
    res.push(curr.length);
  }
  return res;
}

console.log(countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3]));

console.timeEnd("duration:");
// P.S: code works but timeouts on codewars
