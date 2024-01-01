function longestPalindromeSubstr(str) {
    let longest = "";
    for (let i = 0; i < str.length; i++) {
        let current = str[i];
        let left = i - 1; 
        let right = i + 1; 
        while (left >= 0 && str[left] === current) {
            left--;
        }
        
        while (right < str.length && str[right] === current) {
            right++;
        }
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
    
        if (right - left - 1 > longest.length) {
            longest = str.substring(left + 1, right);
        }
    }
    return longest;

}

console.log(longestPalindromeSubstr('babad'));