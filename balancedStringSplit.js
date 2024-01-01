function balancedStringSplit(s) {
    let count = 0;
    let balanced = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            balanced++;
            console.log(`increment balanced -> ${balanced}`);
        } else {
            balanced--;
            console.log(`decrement balanced -> ${balanced}`);
        }
        if (balanced === 0) {
            count++;
            console.log(`count-> ${count}`);
        }
    }
    return count;

}

console.log(balancedStringSplit("RLRRRLLRLL")); // rl -> c:2