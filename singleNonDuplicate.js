function singleNonDuplicate(nums) {
    let map = new Map();

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
          map.set(num, 1);
        }
    }

    for (const num of nums) {
        if(map.get(num) === 1) return num;
    }
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));