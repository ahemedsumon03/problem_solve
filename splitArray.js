function splitArray(nums, k) {
    let n = nums.length;
    let low = Math.max(...nums); // 6
    let high = nums.reduce((acc, curr) => {
        return acc + curr
    }, 0) // 17

    //  17+6 = 23/2 = 11

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let sum = largestSum(nums, mid);
    }
}

function largestSum(nums, mid) {
    
}

console.log(splitArray([1, 2, 3, 5, 6], 2));
