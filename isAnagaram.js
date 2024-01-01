// isAnagram

function isAnagram(str1, str2) {
    str1 = str1 && str1.toLowerCase();
    str2 = str2 && str2.toLowerCase();
    if (!str1.length || !str2.length) return false;
    console.log(str1.split('').sort().join(''));
    console.log(str2.split('').sort().join(''));
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false
console.log(isAnagram("rail Safety", "fairy tales")); // Output: true
