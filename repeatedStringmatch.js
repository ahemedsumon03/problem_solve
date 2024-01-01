function repeatedStringMatch(a, b) {

    let stringa = a;
    let repeatValue = b.length / a.length;
    let count = 1;

    for (let i = 0; i < repeatValue + 2; i++) {
        if (a.includes(b)) {
            return count;
        } else {
            a += stringa;
            count++;
        }
    }

    return -1;
}

console.log(repeatedStringMatch("abcd", "cdabcdab"));