function applyOperations(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }

    let zero = nums.filter((item) => item == 0);
    let nonzero = nums.filter((item) => item != 0);
    return [...nonzero, ...zero];
}

console.log(applyOperations([1, 2, 2, 1, 1, 0]));