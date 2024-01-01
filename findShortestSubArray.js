function findShortestSubArray(nums) {
    
    // using hash map

    let num_count = new Map(); // hash map to keep count each number
    let degree = 0; // initialize degree to 0

    let first_seen = new Map(); // hash map to keep track first time we see the number
    let min_length = 0;

    for (let i = 0; i <= nums.length; i++) { // loop through the numbers
        if (!first_seen.has(nums[i])) {
            first_seen.set(nums[i], i); // mark the index of first occurance 
        }
        
        num_count.set(nums[i], (num_count.has(nums[i]) ? num_count.get(nums[i]) : 0) + 1);

        // console.log(`num count get->${num_count.get(nums[i])}`);

        // if count of specific number is greater than degree, update degree
        console.log(`${nums[i]} counts -> `+num_count.get(nums[i]));
        if (num_count.get(nums[i]) > degree) {
            degree = num_count.get(nums[i]);
            console.log(`degree -> ${degree}`);
            console.log(`i->${i}`)
            min_length = i - first_seen.get(nums[i]) + 1; // 0-0+1 // 1
            console.log(`min length -> ${min_length}`);   // 2-1+1 // 1
        }
    }

    for (let [key, value] of num_count) {
        console.log(`key -> ${key}, value -> ${value}`);
    }
}

console.log(findShortestSubArray([1, 2, 2, 3, 1]));