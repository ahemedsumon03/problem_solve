function IntToRoman(num) {
    let roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = '';
    Object.keys(roman).map((item) => {
        while (num >= roman[item]) {
            result += item;
            num -= roman[item];
        }
    })

    return result;
}

console.log(IntToRoman(3));