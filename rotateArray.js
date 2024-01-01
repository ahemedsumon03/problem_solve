function rotate(nums, k) {

    // return nums;

    // solution 2
    // let len = nums.length;
    // k = k % len; // 3 % 7 = 3
    // console.log(nums.splice(4));
    // nums.unshift(...nums.splice(len - k));
    // return nums;  

    // solution 3
    // let len = nums.length;
    // k = k % len;
    // nums.unshift(...nums.splice(len - k));
    // return nums;

    // solution 4
    let len = nums.length;
    k = k % len;
    let arr = nums.splice(len - k);
    nums.unshift(...arr);
    return nums;

    // solution 5
    // let len = nums.length;
    // k = k % len;
    // nums.unshift(...nums.splice(len - k));
    // return nums;

    // solution 6
    // let len = nums.length;
    // k = k % len;
    // let arr = nums.splice(len - k);
    // nums.unshift(...arr);
    // return nums;

    // solution 7
    // let len = nums.

    // for(let i = 0; i < k; i++){
    //     nums.unshift(nums.pop());
    // }
    // return nums;

}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], k = 3));