function flat(arr, n) {
    // first way
    // if(n == 0){
    //     return arr;
    // }
    // return arr.reduce((acc,curr) => acc.concat(Array.isArray(curr) ? flat(curr,n-1) : curr),[]);

    if (n == 0) return arr;

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let subarray = flat(arr[i], n - 1);
            newArray.push(...subarray);
        } else {
            newArray.push(arr[i]);
        }
    }

    return newArray;

}

console.log(flat([1, [2, [3, [4, [5]]]]], 2));