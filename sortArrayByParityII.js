function sortArrayByParityII(nums) {
    let even = 0;
    let odd = 1;

    while (even < nums.length && odd < nums.length) {
        while (even < nums.length && nums[even] % 2 == 0) {
            even = even + 2;
        }
        while (even < nums.length && nums[odd] % 2 != 0) {
            odd = odd + 2;
        }

        if (even < nums.length && odd < nums.length) {
          [nums[even],nums[odd]] = [nums[odd],nums[even]]; // swap the value
        }
    }

    return nums;
}

console.log(sortArrayByParityII([4, 2, 5, 7]));