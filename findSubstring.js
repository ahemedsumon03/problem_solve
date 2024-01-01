// let country = ['bangladesh', 'india', 'nepal'];

// console.log(country.splice(1, 1));


var findSubstring = function (s, words) {
    //  Initialise an array to store our answers in
    let answers = [];

    //    Calculate the total length of the words
    const totalLengthOfWords = words.reduce(
        (total, word) => (total += word.length),
        0
    );

    //  Loop through the string, until there is insufficient space left to find all words
    for (let i = 0; i <= s.length - totalLengthOfWords; i++) {
        // If the string from this point contains all target words, store the starting position
        console.log(s.substring(i))
        console.log(words.slice())
        if (doesStringContainAllWords(s.substring(i), words.slice())) {
            answers.push(i);
        }
    }

    return answers;
};

function doesStringContainAllWords(string, words) {
    // If all words have been found
    if (!words.length) return true;

    // Loop through all words
    for (let i = 0; i < words.length; i++) {
        //   Store the length of the target word (as it may be spliced)
        const targetWordLength = words[i].length;
        console.log(`targetWordLength: ${targetWordLength}`);
        console.log(`substring: ${string.substring(0, targetWordLength)}`);
        console.log(`words: ${words[i]}`)
        // Check if the word in question matches is found at the start of the string
        if (string.substring(0, targetWordLength) === words[i]) {
            //   Remove the found word from the words array
            words.splice(i, 1);
            console.log(`words: ${words}`)
            //  Look for the remaining words in the rest of the string
            console.log('hello');
            return doesStringContainAllWords(
                string.substring(targetWordLength),
                words
            );
        }
    }

    // If no words were found in the current string
    return false;
}
console.log(findSubstring('barfoothefoobarman', ["foo", "bar"]));