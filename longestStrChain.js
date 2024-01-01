function longestStrChain(words) {
    // sort an array by length
    words.sort((a, b) => a.length - b.length);
    let res = 0;
    // create map
    let dp = new Map();

    for (let word of words) {
        let max = 0;
        for (let i = 0; i < word.length; i++) {
            // get the previous word
            let pre = word.slice(0, i) + word.slice(i + 1);
            // get the max value
            max = Math.max(max, dp.get(pre) || 0);
        }
        // set the max value
        dp.set(word, max + 1);
        // get the max value
        res = Math.max(res, dp.get(word));
    }

    return res;
}

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));