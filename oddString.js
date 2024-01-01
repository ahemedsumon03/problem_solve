function oddString(words) {
    let hash = {}
    for (let i = 0; i < words.length; i++) {
        let diff = ""
        console.log(words[i])
        for (let j = 0; j < words[i].length - 1; j++) {
            diff = diff + "." + String(words[i].charCodeAt(j + 1) - words[i].charCodeAt(j))
            console.log(`diff->${diff}`);
        }
        if (hash[diff]) hash[diff].push(i)
        else hash[diff] = [i]
    }
    console.log(`hash->${Object.entries(hash)}`);
    for (const [key, value] of Object.entries(hash)) {
        console.log(`key, value -> ${key}-> ${value}`)
        // console.log(`wordsValue->${words[value[0]]}`)
        if (value.length === 1) return words[value[0]]
    }
}

console.log(oddString(["adc", "wzy", "abc"]));