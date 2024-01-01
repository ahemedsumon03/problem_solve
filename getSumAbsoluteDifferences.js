function getSumAbsoluteDifferences(nums) {
    // let sum = 0;
    // let result = [];
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         sum += Math.abs(nums[i] - nums[j]);
    //     }
    //     result.push(sum);
    //     sum = 0;
    // }
    // return result;
    
    let totalSum = nums.reduce((sum, n) => sum + n, 0);
    let left = 0;
    let right = totalSum;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        console.log(nums[i], i, left, right, nums.length);
        result.push(nums[i] * i - left + right - nums[i] * (nums.length - i - 1));
        
        left += nums[i];
    }

    return result;
}

console.log(getSumAbsoluteDifferences([2,3,5]));