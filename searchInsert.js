function searchInsert(arr, target) {
    // let newArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr.includes(target)) {
    //         if (arr[i] === target) {
    //             return i;
    //         }
    //     } else {
    //         return [...arr, target].sort((a, b) => a - b).indexOf(target);
    //     }
    // }
    // return newArray;

    return [...arr, target].sort((a, b) => a - b).indexOf(target);

    

    // return arr.indexOf(target)

}

// console.log(searchInsert([3, 5, 7, 9, 10], 8));
console.log(searchInsert([1, 3, 5, 6], 5));