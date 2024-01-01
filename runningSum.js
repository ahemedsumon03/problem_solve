const runningSum = nums => {
    let sum = 0;
    return nums.map(x => sum += x);
}

console.log(runningSum([1,2,3,4]));