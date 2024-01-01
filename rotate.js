function rotate(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            // console.log(j)
            result[i][j] = matrix[matrix.length - 1 - j][i]; // matrix[2]
            console.log(result[i][j]);
        }
    }
    return result;
}

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));