// findPalindromepair

function findPalindromePairs(words) {
    let palindromeArray = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j) {
                let word = words[i] + words[j];
                if (word === word.split("").reverse().join('')) {
                    palindromeArray.push([i, j]);
                }
            }
        }
    }

    return palindromeArray;
}

// abcddcba-> abcddcba
// llssssll-> llssssll
// slls-> slls

const words = ["abcd", "dcba", "lls", "s", "sssll"];
console.log(findPalindromePairs(words));