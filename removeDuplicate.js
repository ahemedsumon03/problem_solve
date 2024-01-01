// remove duplicates from sorted array

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let j = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j - 1]) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
}

console.log(removeDuplicates([1, 1, 2]));