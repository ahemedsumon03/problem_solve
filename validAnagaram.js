function validAnagaram(str1, str2) {
    let msg1 = str1.split('').sort().join('');
    let msg2 = str2.split('').sort().join('');

    return msg1 == msg2;

}

console.log(validAnagaram('anagram', 'nagaram'));