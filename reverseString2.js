function reverse(arr, i, j) {
    while (i < j) {
       // swap value
       [arr[i],arr[j]] = [arr[j],arr[i]];

        i = i + 1;
        j = j - 1;
    }
}

function reverString2(str, k) {
    let stringArray = str.split('');
    let strarraylength = stringArray.length;
    let i = 0;

    while (i < strarraylength) {
        let j = Math.min(i + k - 1, strarraylength - 1);
        reverse(stringArray, i, j);
        i = i + 2 * k;
    }

    return stringArray.join('');
}

console.log(reverString2('abcdefg', 2));