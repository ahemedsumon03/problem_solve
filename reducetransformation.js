function reduceTransformation(nums, fn, init) {
    let accum = init;
    for (let num of nums) {
        accum = fn(accum, num);
    }
    return accum;
}

console.log(reduceTransformation([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; },0));