var Solution = function (nums) {
    this.nums = nums;
}

Solution.prototype.pick = function (target) {
    let count = 0;
    let index = 0;
    for (let i = 0; i < this.nums.length; i++) {
        if (this.nums[i] === target) {
            count++;
            if (Math.floor(Math.random() * count) === 0) {
                index = i;
            }
        }
    }
    return index;
};

var obj = new Solution([1, 2, 3, 3, 3])
console.log(obj.pick(3));