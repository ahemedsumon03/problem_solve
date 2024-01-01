function maxSubArraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        console.log('current sum'+' '+currentSum)
        maxSum = Math.max(currentSum, maxSum);
        console.log('max sum'+' '+ maxSum)
    }

    return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; 
console.log(maxSubArraySum(nums));