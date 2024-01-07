function arrayChange(nums, operation) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

     // map(1->0,2->1,4->2,6->3)

    for (const op of operation) {
        let key = op[0]; // 1,4,6
        let value = op[1]; // 3,7,1

        // if key exists
        if (map.has(key)) {
            let idx = map.get(key); // 0,2,3
            map.set(value, idx); // map(2->1,3->0,7->2,1->3)
            map.delete(key);
        }
    }

    console.log(map);
    for (let [key, idx] of map) {
        console.log(key, idx);
        nums[idx] = key;
    }

    return nums;
}

console.log(arrayChange([1, 2, 4, 6], [[1, 3], [4, 7], [6, 1]]));