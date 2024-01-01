function romanToInteger(roman) {
    let result = 0;
    let romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    for (let i = 0; i < roman.length; i++) {
        let current = romanMap[roman[i]];
        console.log(`current : ${current}`)
        let next = romanMap[roman[i + 1]];
        console.log(`next : ${next}`)
        if (current < next) {
            result -= current;
            // result = -1
            console.log(`result : ${result}`)
        }
        else {
            result += current;
        }
    }
    return result;

}

console.log(romanToInteger('IVI'));  // result = 0-1 = -1 // resullt = -1+6 = 5;