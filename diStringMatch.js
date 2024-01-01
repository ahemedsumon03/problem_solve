function diStringMatch(str) {

    let stringLength = str.split('').length;

    let result = Array(stringLength + 1);
    let lowerRange = 0;
    let higherRange = stringLength;

    for (let i = 0; i < stringLength; i++) {
        if (str[i] == 'I') {
            result[i] = lowerRange;
            lowerRange++;
        } else if (str[i] === 'D') {
            result[i] = higherRange;
            higherRange--;
        }
    }

    result[stringLength] = higherRange;
    
    return result;

}

console.log(diStringMatch("IDID"));