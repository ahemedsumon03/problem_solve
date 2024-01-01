function arryPairMinSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    // console.log(`length: ${nums.length}`)// 4
    for (let i = 0; i < nums.length; i += 2) {
        console.log(nums[i])
        sum += nums[i];
        console.log('sum'+sum)
    }
    return sum;

}

console.log(arryPairMinSum([6, 2, 6, 5, 1, 2]));