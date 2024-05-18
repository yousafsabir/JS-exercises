// Reduce Direction
// kata: https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {
  const oppositeDirections = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };
  let dupDirFound = true;
  while (dupDirFound) {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] && arr[i + 1] === oppositeDirections[arr[i]]) {
        arr.splice(i, arr[i] === arr[i + 1] ? 1 : 2);
        flag = true;
        break;
      }
    }
    if (!flag) dupDirFound = false;
  }
  return arr;
}
