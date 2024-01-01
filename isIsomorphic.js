function isIsomorphic(s, t) {
    if (s.length != t.length) return false;
    let sArr = [];
    let tArr = [];
    console.log(s.indexOf('p'));
    console.log(s.indexOf('a'));
    for (let i = 0; i < s.length; i++) {
        console.log('s->'+s.indexOf(s[i]));
        sArr.push(s.indexOf(s[i]));
        console.log('t->' + s.indexOf(t[i]));
        tArr.push(t.indexOf(t[i]));
        console.log(sArr);
        console.log(tArr);
        if (sArr[i] != tArr[i]) return false;
    }
    return true;
}

console.log(isIsomorphic('foo','bar'));  // | e->a, g->d, g->d| | a->e, d->g, d->g|