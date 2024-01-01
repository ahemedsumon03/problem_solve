function arrangeCoins(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;

        if (sum == n) {
            return i;
        }

        if (sum > n) {
            return i - 1;
        }
    }
}

console.log(arrangeCoins(5));