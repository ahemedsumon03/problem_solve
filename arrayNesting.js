function arrayNesting(nums) {
    // let newArray = [];
    // for (let i = 0; i < nums.length; i++) {
       
    // }
    // i = 0;
    // i = nums in 0 ? 1 : 2;
    // i = nums.includes(0) ? 0 : nums.length -1;
    // let i = 0;
    // while (i < nums.length && !newArray.includes(nums[i])) {
    //     let value = nums[i];
    //     console.log(`i ${i}`)
    //     console.log(`value ${value}`)
    //     newArray.push(nums[i]);
    //      i = value;
    //     i = nums[i];
    // }

    // return newArray.length;

    let maxLen = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let idx = i;
        while (nums[idx] !== null) {
            let lastIndex = nums[idx];
            nums[idx] = null;
            idx = lastIndex;
            count++;
        }

        maxLen = Math.max(maxLen, count);
    }

    return maxLen;
}

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2]));
   