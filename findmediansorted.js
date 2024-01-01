function findMedianSortedArray(num1, num2) {
    let arr = num1.concat(num2);
    arr.sort((a, b) => a - b);
    console.log(arr)
    let len = arr.length;
    if(len%2 === 0) {
        return parseFloat((arr[len/2] + arr[len/2 - 1])/2).toFixed(5);
    } else {
        return parseFloat(arr[Math.floor(len/2)]).toFixed(5);
    }
    
    // return arr;

}

console.log(findMedianSortedArray([1, 2],[3,4]));