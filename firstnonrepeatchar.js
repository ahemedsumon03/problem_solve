// find firstNonRepeat Charter

function firstNonRepeatCharter(st) {
    for (let i = 0; i < st.length; i++) {
        // first index and last index equal then it will be non repeat number
        if (st.indexOf(st[i]) === st.lastIndexOf(st[i])) {
            return i;
        }
    }
    return null;
}

console.log(firstNonRepeatCharter('mmay'));