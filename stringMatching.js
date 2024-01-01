function stringMatching(words) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[i].includes(words[j])) {
                result.push(words[j]);
            }
        }
    }
    return [...new Set(result)];
}

console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]));