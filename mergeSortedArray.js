function megeSortedArray(nums1, m, nums2, n) {
    let i = m - 1; // 2
    let j = n - 1; // 2
    let k = m + n - 1; // 5
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {  // 3 > 2
            console.log(nums1[i], nums2[j]); // 3 2
            nums1[k] = nums1[i];
            i--;
            k--;
            // console.log(nums1[k--], nums1[i--]); // 3 2
        } else if (nums1[i] === nums2[j]) {
            nums1[k] = nums1[i];
            i--;
            k--;
        }
        else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
    while (i >= 0) {
        nums1[k--] = nums1[i--];
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    return nums1;
}

console.log(megeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));