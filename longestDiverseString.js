function longestDiverseString(a, b, c) {
    let arr = [[a, 'a'], [b, 'b'], [c, 'c']];
    let result = '';
    while (true) {
        arr.sort((a, b) => b[0] - a[0]);
        let maxValue = arr[0][0];
        let maxChar = arr[0][1];
        if (maxValue == 0) break;
        if (result.length >= 2 && result[result.length - 1] == result[result.length - 2] && result[result.length-1] == maxChar) {
            if (arr[1][0] > 0) {
                arr[1][0]--;
                result = result + arr[1][1];
            } else {
                break;
            }
        } else {
            result = result + maxChar;
            arr[0][0]--;
        }
    }

    return result;
}

console.log(longestDiverseString(1,3,5));