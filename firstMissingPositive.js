function firstMissingPositive(nums) {
    for (let i = 0; i < nums.length; i++) {    
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    // console.log(nums); // [-1,1,3,4]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) { 
            return i + 1;  // 2
        }
    }

    return nums.length + 1; // if all numbers are positive, return the length of the array + 1

}

console.log(firstMissingPositive([3,4,-1,1]));