function intersect(nums1, nums2) {
    let map = new Map();

    for (const value of nums1) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1);
        } else {
            map.set(value, 1);
        }
    }

    let newArray = [];
    for (const value1 of nums2) {
        if (map.has(value1) && map.get(value1) > 0) {
            newArray.push(value1);
            map.set(value1, map.get(value1) - 1);
        }
    }

    return newArray;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));