function reorganizeString(s) {
    const hash = {};
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1;
    }

    let letterByCount = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
    let output = Array(s.length);
    let index = 0;
    for (let i = 0; i < letterByCount.length; i++) {
        let letter = letterByCount[i];
        let letterCount = hash[letter];
        // check that is array has place for give letter to place itself in array with gap of 1 index coz we can not add same char together. suppose we have string aaab that means a has 3 times and b has 1 time. Now my array length will be eqal to our original string length. we should give a gap of 1 index in array. we can not give place a in our array 3 times gap of 1 index coz that will be out of bound.
        if (letterCount > Math.floor((s.length + 1) / 2)) {
            return "";
        }
        for (let i = 0; i < letterCount; i++) {
            // when index value greater or equal than oginal string then index value assign 1 otherwise add value in output array with gap of 1 index;
            if (index >= s.length) {   // 0 1 2 3
                index = 1;            // a  b a b
            }
            output[index] = letter;
            index += 2;
        }
    }

    return output.join('');
}

console.log(reorganizeString('aabb'));