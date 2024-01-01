function divideArray(nums) {
    let map = new Map();

    for (const value of nums) {
        map.has(value) ? map.delete(value) : map.set(value, 1);
    }

    return map.size === 0;
}

console.log(divideArray([3, 2, 3, 2, 2, 2]));