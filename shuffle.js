var Solution = function (nums) {
    this.originalArray = [...nums]
    this.shuffledArray = [...nums]
}

Solution.prototype.reset = function () {
    this.shuffledArray = [...this.originalArray]
    return this.shuffledArray
};

Solution.prototype.shuffle = function () {
    for (let i = this.originalArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.shuffledArray[i], this.shuffledArray[j]] = [this.shuffledArray[j], this.shuffledArray[i]]
    }

    return this.shuffledArray;
};

const solution = new Solution([1, 2, 3])
console.log(solution.shuffle());