// Write a JavaScript function twoSum that takes an array of integers nums and an integer target as input and returns an array of two numbers representing the indices of the two numbers in the array that add up to the target.

function TwoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(TwoSum([2, 7, 11, 15], 9));
