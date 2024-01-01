function arrayRankTransform(arr) {
//     let sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
    //     return arr.map(x => sorted.indexOf(x) + 1);
    
    let map = new Map();
    [...new Set(arr)].sort((a, b) => a - b).map((x, i) => map.set(x, i + 1));
    return arr.map(x => map.get(x));
}

// [10,20,30,40] // 4,1,2,3

console.log(arrayRankTransform([40,10,20,30]));