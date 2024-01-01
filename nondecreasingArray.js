function isNonDecreasing(nums) {
    let count = 0;

    for (let i = 1; i < nums.length && count <= 1; i++) {
        console.log(nums[i]);
        console.log(nums[i - 1]);
        console.log('execute 5 line');
        if (nums[i] < nums[i - 1]) {
            count++;
            if (i >= 2 && nums[i] < nums[i - 2]) {
                nums[i] = nums[i - 1];
            } else {
                nums[i - 1] = nums[i];
            }
            console.log('execute 13 line');
        }
    }

    return count <= 1;
}

console.log(isNonDecreasing([3, 4, 2, 3])); // should false