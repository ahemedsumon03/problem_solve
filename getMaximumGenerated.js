function getMaximumGenerated(n) {
    if (n === 0) return 0;

    let nums = [];
    nums[0] = 0;
    nums[1] = 1;

    for (let i = 1; i <= n; i++) {
        if (i * 2 > n) break;
        nums[2 * i] = nums[i];

        if ((i * 2 + 1) > n) break;
        nums[2 * i + 1] = nums[i] + nums[i + 1];
    }

    return Math.max(...nums);
}

console.log(getMaximumGenerated(7));