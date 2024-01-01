// find missing number in distnict array

function findMissingNumber(nums) {
    // Calculate the expected sum of the numbers from 0 to n using the formula (n * (n + 1)) / 2
    const n = nums.length + 1; // Since one number is missing
    const expectedSum = (n * (n + 1)) / 2; // 6
    console.log(`expected sum ${expectedSum}`)

    // Calculate the actual sum of the elements in the array
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    console.log(actualSum)
    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

const arr = [1,2,4];
console.log(findMissingNumber(arr));