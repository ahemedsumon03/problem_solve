function merge(nums1, m, nums2, n) {

    let filterdata = nums1.filter(item => item !== 0);
    let mergeArray = [...filterdata, ...nums2];
    return mergeArray.sort((a, b) => a - b);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));