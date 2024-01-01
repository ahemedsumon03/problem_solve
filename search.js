function search(nums, target) {
    return nums.includes(target) ? nums.indexOf(target) : -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 3));