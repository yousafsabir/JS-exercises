// Iteration 1: Brute force approach

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let areaMax = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let w = j - i;
      let h = height[i] > height[j] ? height[j] : height[i];
      let area = w * h;
      if (area > areaMax) areaMax = area;
    }
  }

  return areaMax;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
