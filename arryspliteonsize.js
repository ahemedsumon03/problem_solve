function ArraySplitBasedOnSize(nums, size) {
    let result = [];
    for (let i = 0; i < nums.length; i += size) {
        result.push(nums.slice(i, i+size));
    }
    return result;

}

console.log(ArraySplitBasedOnSize([1, 9, 6, 3, 2], 3));
// [1,9,6],[3,2]