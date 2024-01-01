function isPalindrome(str) {
    str = str && str.toLowerCase().trim();
    
    if (!str?.length) return false;

    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("hello")); // Output: true