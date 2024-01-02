// leetcode problem 238

function productExceptSelf(nums) {
    let suffix = [];
    let prefix = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            prefix[i] = 1;
        } else {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i == nums.length - 1) {
            suffix[i] = 1;
        } else {
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * suffix[i];
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));