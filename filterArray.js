//2634. Filter Elements from Array


var filter = function (arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], Number(i))) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filter([1, 2, 3, 4, 5], (x) => x % 2 == 0));
