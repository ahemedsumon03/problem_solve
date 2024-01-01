// multiply string
// leetcode 43
function multiply(num1, num2) {
    let value = BigInt(num1) * BigInt(num2);
    return value.toString();
}


console.log(multiply("2", "3"));