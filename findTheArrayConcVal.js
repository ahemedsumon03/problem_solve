function findTheArrayConcVal(nums) {
    let sum = 0;

    while (nums.length) {
        let first = nums.shift();
        let last = nums.pop();

        let data = first?.toString() + last?.toString();
        sum += parseInt(data);
    }

    return sum;
}

console.log(findTheArrayConcVal([7, 52, 2, 4]));