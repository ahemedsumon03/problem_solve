function construct2DArray(original, m, n) {
    
    let l = 0;
    let newArray = [];

    if (original.length !== m * n) {
        return [];
    } else {
        for (let row = 0; row < m; row++) {
            newArray[row] = [];
            for (let col = 0; col < n; col++) {
                newArray[row][col] = original[l++];
            }
        }
    }

    return newArray;

}

console.log(construct2DArray([1, 2, 3, 4], 2, 2));