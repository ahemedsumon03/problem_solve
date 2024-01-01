function isInterleave(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    const dp = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(0));
    console.log(`dp ${dp}`);
    dp[0][0] = 1;
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            // console.log(`i ${i}`)
            if (i > 0) {
                console.log(dp[i - 1]);
                dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]);
            }
            if (j > 0) {
                dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
            }
        }
    }
    return dp[s1.length][s2.length];
}

console.log(isInterleave('aabcc', 'dbbca','aadbbcbcac'));