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
    dupDirFound = arr.reduce((flag, v, i) => {
      if (!flag && arr[i + 1] && arr[i + 1] === oppositeDirections[v]) {
        arr.splice(i, 2);
        return true;
      }
      return flag;
    }, false);
  }
  return arr;
}
