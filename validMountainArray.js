function validMountainArray(nums) {

    if (nums.length < 3) return false;

    let i = 0;

    // increases sequence
    // 0 < 4 && 1 < 2  // i er man 1
    // 1 < 4 && 2 < 3  // i er man 2
    // 2 < 4 && 3 < 2  // i er man 3
    // 3 < 4 && 2 < 1 // i er man 4

    while (i < nums.length - 1 && nums[i] < nums[i + 1]) {
        // console.log(nums[i], nums[i + 1]);
        i++;
    }

    // If there is no increasing sequence or the last element is the peak

    if (i === 0 || i === nums.length - 1) return false;

    // decreaseing sequence

    while (i < nums.length - 1 && nums[i] > nums[i + 1]) {
        i++;
    }
    // If the decreasing sequence extends to the end
    console.log(`i ${i}`);
    console.log(`number length ${nums.length}`);
    return i === nums.length - 1;
}

console.log(validMountainArray([1,2,1]));