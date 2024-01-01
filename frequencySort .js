function frequencySort(nums) {
    let map = new Map();
    for (const n of nums) {
        map.set(n, map.get(n) + 1 || 1);
    }

    let sortmaparray = nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
    
    return sortmaparray;
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]));