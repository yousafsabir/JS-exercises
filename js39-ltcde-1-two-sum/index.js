// link: https://leetcode.com/problems/two-sum/

// First Solution (my own)
// Time complexity: O(n^2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Second Solution (learned from the solutions)
// Time complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in numsObj) {
      return [numsObj[target - nums[i]], i];
    }
    numsObj[nums[i]] = i;
  }
  return [];
};
