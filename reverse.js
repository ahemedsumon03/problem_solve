// leetcode problem 7


var reverse = function (x) {
    let rev = 0;
    while (x != 0 && x < 1534236469) {
        rev = rev * 10 + x % 10;
        console.log(`rev ${rev}`)
        x = parseInt(x / 10);
        console.log(`x ${x}`);
    }
    return rev;
}

console.log(reverse(-123));