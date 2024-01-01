function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const res = new Set();

    for(let num of nums2) set1.has(num) && res.add(num);

    return Array.from(res);

}

console.log(intersection([1, 2, 2, 1], [2, 2]));