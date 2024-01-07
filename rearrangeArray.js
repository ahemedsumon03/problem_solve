function rearrangeArray(nums) {

    let result = new Array(nums.length); // Initialize result with length
    let positive = 0; // should be first positive number in array thats for positive pointer initialize 0
    let negative = 1; // negative pointer initialize 1

    for (const num of nums) {
        if (num > 0) {
            // if value positive start fill array with positive value
            result[positive] = num;
            // increment positive pointer by 2 because we want to fill next value in array with positive value
            // and we want to start from next index in array.
            // if we increment positive pointer by 1 we will fill array with negative value and we will not get the
            // expected result.
            // for example:
            // nums = [3, 1, -2, -5, 2, -4]
            // result = [3, 1, -2, -5, 2, -4]
            // positive = 0
            // negative = 1
            // positive pointer increment by 1
            // result[1] = 1
            // positive pointer increment by 2
            // result[3] = 3
            // positive pointer increment by 2
            // result[5] = 2
            // positive pointer increment by 2
            // result[7] = -4
            // positive pointer increment by 2
            // result[9] = -2
            // positive pointer increment by 2
            // result[11] = -5
            // positive pointer increment by 2
            // result[13] = undefined
            // positive pointer increment by 2
            positive += 2;
        } else {
            result[negative] = num;
            negative += 2;
        }
    }

    return result;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));