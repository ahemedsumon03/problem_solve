function rotateString(s, goal) {
    if (s.length !== goal.length) return false;
    let s1 = s + s;
    return s1.includes(goal);
}

console.log(rotateString('abcde', 'abced'));