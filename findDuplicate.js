function findDuplicateNumber(nums) {
    let newArray = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                newArray.push(nums[i]);
            }
        }
    }

    return newArray.length ? newArray : [];

}
console.log(findDuplicateNumber([1, 3, 4, 2,2]));

// 1,4,3,2,2
