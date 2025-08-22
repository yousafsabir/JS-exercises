// Iteration 1: Brute force approach
// Iteration 2: Two Pointer approach

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let areaMax = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let leftHeight = height[left];
    let rightHeight = height[right];
    let _height = leftHeight > rightHeight ? rightHeight : leftHeight;
    let width = right - left;
    let area = width * _height;

    if (area > areaMax) areaMax = area;

    if (leftHeight > rightHeight) right -= 1;
    else left += 1;
  }

  return areaMax;
}
