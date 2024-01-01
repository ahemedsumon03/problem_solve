function magicalString(n) {
    let mString = '122'; let ones = 1;
    for (let i = 2; i < n; i++) {
        mString += (3 - mString.at(-1) + "").repeat(mString[i]);
        ones += mString[i] == '1';
    }
    return ones;
}

console.log(magicalString(3));