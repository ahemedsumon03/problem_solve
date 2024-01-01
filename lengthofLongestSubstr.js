function LengthofLongestSubStr(str) {
    let end = 0;
    let start = 0;
    let maxLength = 0;
    let charSet = new Set();

    while (end < str.length) {
        if (!charSet.has(str[end])) {
            charSet.add(str[end]);
            console.log(charSet)
            console.log(`End ${str[end]}`);
            maxLength = Math.max(maxLength, charSet.size);
            end++;
        } else {
            console.log(`Start ${start}`);
            console.log(`Delete ${str[start]}`)
            charSet.delete(str[start]);
            start++;
        }
    }

    return maxLength;
}

console.log(LengthofLongestSubStr('pwwkew'));