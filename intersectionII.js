function intersectionII(nums) {
    let newArray = [];

    for (let i = 0; i < nums[0].length; i++) {
        if (nums.every((array) => array.includes(nums[0][i]))) {
            newArray.push(nums[0][i]);
        }
    }

    return newArray.sort((a, b) => a - b);
}

console.log(intersectionII([[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]));