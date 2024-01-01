// leetcode problem 989

var addToArrayForm = function (num, k) {
    // let sum = BigInt(num.join('')) + BigInt(k);
    // return sum.toString().split('');

    let sum = BigInt(num.join('')) + BigInt(k);
    let convertSum = sum.toString().split('').map((num) => parseInt(num));
    return parseInt(convertSum.join(''));
}

console.log(addToArrayForm([1, 2, 0, 0],34))