//leetcode 2007

var findOriginalArray = function (changed) {
    let result = []; // initialize result array
    let map = new Map(); // initialize map

    changed.sort((a, b) => a - b); // sort by asending order

    for (let i = 0; i < changed.length; i++) {
        let currentValue = changed[i]; // get current Value
        /* if currentValue exists in map and also if currentValueFrequency is equal
        to 1 then delete it in the map otherwise decrease frequency of this value.
        */
        if (map.has(currentValue)) {
            if (map.get(currentValue) === 1) {
                map.delete(currentValue);
            } else {
                map.set(currentValue, map.get(currentValue) - 1);
            }
        } else {
            let doubleValue = currentValue * 2; // create doubleValue value
            /* 
             if map exists in doubleValue then increase doubleValue frequency with
             summation of existing frequecy and extra 1 otherwise just initlialize 1
             frequency.

             after that just push current Value in map. when return just check if map size greater than 0 then return empty array otherwise return result array.
            */
            if (map.has(doubleValue)) {
                map.set(doubleValue, map.get(doubleValue) + 1);
            } else {
                map.set(doubleValue, 1);
            }

            result.push(currentValue);
        }
    }

    return map.size > 0 ? [] : result;
};

console.log(findOriginalArray([1, 3, 4, 2, 6, 8]));