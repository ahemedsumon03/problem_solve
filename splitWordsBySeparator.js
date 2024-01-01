function splitWordsBySeparator(words, separator) {
    let results = [];
    // forloop
    // for (let i = 0; i < words.length; i++) {
    //     let data = words[i].split(separator);
    //     for (let i = 0; i < data.length; i++) {
    //        results.push(data[i])
    //     }
    // }

    //foreach loop
    words.forEach(element => {
        let data = element.split(separator);
        data.forEach(item => {
            results.push(item);
        })
    });

    return results.filter((item) => item != "");
}

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], '.'));