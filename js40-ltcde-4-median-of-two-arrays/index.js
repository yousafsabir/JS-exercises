// Leetcode 4

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let newArr = nums1.concat(nums2);
  newArr.sort((a, b) => a - b);
  if (newArr.length % 2 === 0) {
    let mid = newArr.length / 2;
    return (newArr[mid - 1] + newArr[mid]) / 2;
  } else {
    return newArr[newArr.length / 2 - 0.5];
  }
};
