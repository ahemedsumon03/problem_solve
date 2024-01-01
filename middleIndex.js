function findMiddleIndex(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b, 0); // 6
    console.log(`rightsum ${rightSum}`)

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i]; // 5===1
        console.log(`inside loop rightsum ${rightSum}`)
        console.log(`prev leftsum ${leftSum}`);
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i]; 
        console.log(`after letftSum ${leftSum}`) //1
    }
    return -1;
}

console.log(findMiddleIndex([1, -1, 4]));