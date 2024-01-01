function distinctDifferenceArray(nums) {
    let n = nums.length;
    let prefix = new Array(n);
    let suffix = new Array(n);

    let set;

    set = new Set();
    for (let i = 0; i < n; i++) {
        set.add(nums[i]);
        prefix[i] = set.size;
    }

    set = new Set();
    for (let i = n - 1; i >= 0; i--){
        suffix[i] = set.size;
        set.add(nums[i]);
    }

    console.log(suffix,set);

    let an = new Array(n);
    for (let i = 0; i < n; i++) {
        an[i] = prefix[i] - suffix[i];
    }

    // return an;

}

console.log(distinctDifferenceArray([1, 2, 3, 4, 5]));