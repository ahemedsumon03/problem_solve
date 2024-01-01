// regular expression matching

function isMatch(a, b) {
    if (a === b) return true;
    if (b.length > 1 && b[1] === '*') {
        if (isMatch(a, b.substring(2))) return true;
        if (a.length > 0 && (a[0] === b[0] || b[0] === '.')) {
            return isMatch(a.substring(1), b);
        }
    }
    return false;
}

console.log(isMatch('aa', 'a*'));