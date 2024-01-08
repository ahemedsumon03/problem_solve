function minIncrementForUnique(nums) {
    let total = 0;
    nums.sort((a, b) => a - b); // sort asending order
    // debug this code
    /*
    [1,1,2,2,3,7] -> nums
[1,2,2,2,3,7] 
[1,2,3,2,3,7]

nums[i] = 1;
nums[i-1] = 1;

*first step

nums[i] <=nums[i-1] -> true
newValue = 2
total = total+newValue-nums[i] -> 0+2-1 ->1
nums[i] = newValue

*second step

nums[i] <=nums[i-1] // 2<=2 -> true
newValue = nums[i-1] +1 // 3
total = total + newValue - nums[i]
nums[i] = newValue
    */
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            let newValue = nums[i - 1] + 1;
            total = total + newValue - nums[i];
            nums[i] = newValue;
        }
    }

    return total;
}

console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));