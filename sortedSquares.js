function sortedSquares(nums) {
    let newArray = [];
    nums.forEach((num) => {
        newArray.push(num * num)
    })

    return newArray.sort((a,b) => a-b);

    // return nums.map((num) => num * num).sort((a, b) => a - b);
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));