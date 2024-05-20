// Greed is Good
// kata: https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function score(dice) {
  let checked = [];
  let points = 0;

  for (let val of dice) {
    if (checked.includes(val)) continue;
    checked.push(val);
    let occurances = dice.reduce((a, v) => (v === val ? a + 1 : a), 0);
    if (val === 1 || val === 5) {
      points += (val === 1 ? 1000 : 500) * ~~(occurances / 3);
      occurances -= 3 * ~~(occurances / 3);
      if (occurances) {
        points += (val === 1 ? 100 : 50) * occurances;
      }
    } else if (occurances >= 3) {
      points += val * 100;
    }
  }
  return points;
}

console.log(score([5, 1, 3, 4, 1]));
console.log(score([1, 1, 1, 3, 1]));
console.log(score([2, 4, 4, 5, 4]));
