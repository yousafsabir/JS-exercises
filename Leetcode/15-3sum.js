function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    // We basically have to have a, b, c sum to zero

    // main loop for a & then two pointer solution for b & c
    for (let i = 0; i < nums.length; i++) {
        // Since nums array is going to have duplicates, so we'll check if
        // we have repeated a
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Let's now implement the two pointers left & right.
        let l = i + 1,
            r = nums.length - 1;

        while (l < r) {
            let threeSum = nums[i] + nums[l] + nums[r];
            // Since array is sorted, we know that
            // if the sum is less than 0, we move the left pointer to right
            if (threeSum < 0) l += 1;
            // and if the sum is greater, we move the right pointer to left
            else if (threeSum > 0) r -= 1;
            // Now the final possibility is that the sum is 0
            else {
                // Here we push the set to the result var
                result.push([nums[i], nums[l], nums[r]]);

                // Now we move either the left or right pointer to get the unique data set.
                // We're decrementing from right.
                // But here we'll have to check if the decremented value is not the same to
                // the previous right value. & also right value remains greater
                r -= 1;
                while (nums[r] === nums[r + 1] && l < r) r -= 1;
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

const arr = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];

arr.sort((a, b) => a - b);

console.log(arr);
