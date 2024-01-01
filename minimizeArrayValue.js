function minimizeArrayValue(nums) {
    let res = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        console.log(`sum-> ${sum}`);
        res = Math.max(res,Math.ceil(sum / (i + 1)));
        console.log(`res-> ${res}`);
    }

    return res;
}

console.log(minimizeArrayValue([3, 7, 1, 6]));