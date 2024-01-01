function findMaxLength(nums) {

    let hash = { 0: -1 };
    let count = 0;
    let max = 0;

    nums.forEach((item, i) => {
        if (item == 0) count--;
        else count++;

        if (hash[count] == undefined) hash[count] = i;
        max = Math.max(max, i - hash[count]);
    
    })

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == 0) count--;
    //     else count++;

    //     if (hash[count] == undefined) hash[count] = i;
    //     max = Math.max(max, i - hash[count]);
    // }

    return max;
}

console.log(findMaxLength([0, 1]));