function POW(x,n){
    // if(n==0) return 1;
    // if (n % 2 == 0) return parseFloat(POW(x * x, n / 2)).toFixed(2);
    // else return parseFloat(x * POW(x * x, (n - 1) / 2)).toFixed(2);

    return parseFloat(Math.pow(x, n)).toFixed(5);
}

console.log(POW(2.00000, -2));