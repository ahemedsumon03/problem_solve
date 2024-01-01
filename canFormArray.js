function canFormArray(arr, pices) {
    let map = new Map();

    for (let i = 0; i < pices.length; i++) {
        map.set(pices[i][0], pices[i]);
    }

    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            res.push(...map.get(arr[i]));
        }
    }

    return res.join('') === arr.join('');
}

console.log(canFormArray([15, 88], [[88], [15]]));