function lengthOfLastWord(sentence) {
    let newSentenceArray = sentence.split(' ');
    let filterdata = newSentenceArray.filter((word) => word !== '');
    let lastWord = filterdata[filterdata.length - 1];
    return lastWord.length;
}


console.log(lengthOfLastWord("   fly me   to   the moon  "));