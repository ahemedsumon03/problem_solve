function longestPalindromeSubstr(str) {  //babad  // 3-(-1)-1 //3+1-1 = 3
    let longest = "";                    
    for (let i = 0; i < str.length; i++) { // i=2
        let current = str[i]; // b
        console.log(`current-> ${current}`);
        let left = i - 1;  // 2
        console.log(`left->${left}`);
        let right = i + 1; // 4
        console.log(`right->${right}`);
        console.log(left >= 0 && str[left] === current);
        while (left >= 0 && str[left] === current) {
            // left -> 0
            // left -> 0
            left--;
        }
        console.log(right < str.length && str[right] === current);
        while (right < str.length && str[right] === current) {
            console.log(`before increment while loop right -> ${right}`)
            right++;
            console.log(`after increment while loop right -> ${right}`);
        }
        console.log(left >= 0 && right < str.length && str[left] === str[right]);
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        // 1 - (-1) -1 > nai // 1+1-1> nai // 1 > nai // true
        // 3 - 0 - 1 > 1 // 2 > 1 // true
        // 3 - 0 -1 > 2 // 2 > 2 // false
        console.log(right - left - 1 > longest.length);
        console.log(`after left -> ${left}`);
        console.log(`after right -> ${right}`);
        if (right - left - 1 > longest.length) {
            longest = str.substring(left + 1, right);
            console.log(longest);
            // -1+1,1 // 0,1 // c
            // 1,3 // bb
            // 
        }
    }
    return longest;

}

console.log(longestPalindromeSubstr("madbamadamyt"));
