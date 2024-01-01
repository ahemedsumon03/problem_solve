//You are given an integer array nums containing distinct numbers, and you can perform the following operations until the array is empty:

// If the first element has the smallest value, remove it
//Otherwise, put the first element at the end of the array.
// slove time excess limit
function countOperationEmptyArray(nums) {
    let count = 0;
    while (nums.length > 0) {
        let min = nums[0];
        let index = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
                index = i;
            }
        }
        if (index === 0) {
            nums.shift();
        } else {
            nums.push(nums.shift());
        }
        count++;
    }
    return count;

}

console.log(countOperationEmptyArray([3,4,-1]));