function checkPossibility(nums) {
    let changed = false;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1]) {
          continue
        }

        if (changed) return false;
        if (!nums[i - 1]) {
            nums[i] = nums[i + 1];
        }

        if (nums[i + 1] >= nums[i - 1]) {
            nums[i] = nums[i + 1];
        } else {
            nums[i + 1] = nums[i];
        }

        changed = true;
    }
    return true;
}

console.log(checkPossibility([4, 2, 3]));

//[2,3,4]
// [4,2,3]