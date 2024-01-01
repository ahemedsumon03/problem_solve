function findSubString(s, words) {
    let myarray = [];
    let totallengthofWords;
    for (const iterator of words) {
        totallengthofWords = iterator.length * words.length; // 3*2=6
    }
    console.log(`s length-> ${s.length}`);
    console.log(`totallengthwords -> ${totallengthofWords}`);
    console.log(s.length - totallengthofWords);

    for (let i = 0; i <= s.length - totallengthofWords; i++) {
        console.log(s.substring(i));
        console.log(words.slice());

        if (doesStringContainAllWords(s.substring(i), words.slice())) {
            myarray.push(i);
        }
    }

    return myarray;
}

function doesStringContainAllWords(string, words) { 

    if (!words.length) return true;

    for (let i = 0; i < words.length; i++) {
        let targetWordLength = words[i].length;
        if (string.substring(0, targetWordLength) === words[i]) {
            words.splice(i, 1);
            console.log(words.splice(i, 1));
            return doesStringContainAllWords(string.substring(targetWordLength), words);
        }
    }

    return false;
}

console.log(findSubString('barfoothefoobarman', ["foo", "bar"]));