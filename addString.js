function addStrings(num1, num2) {
    let i = num1.length - 1;
    console.log(`i->${i}`);
    let j = num2.length - 1;
    console.log(`j->${j}`);
    let carry = 0;
    let result = "";
    while (i >= 0 || j >= 0) {
        let x = i >= 0 ? num1.charAt(i) - '0' : 0;
        console.log(`x->${x}-> ${typeof(x)}`);
        let y = j >= 0 ? num2.charAt(j) - '0' : 0;
        console.log(`y->${y}->${typeof(y)}`);
        let sum = x + y + carry;
        console.log(`sum->${sum}`);
        carry = Math.floor(sum / 10);
        console.log(`carry->${carry}`);
        result = (sum % 10) + result;
        console.log(`moudle-> ${sum % 10}`);
        console.log(`result->${result}`);
        i--;
        j--;
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}

console.log(addStrings("1", "9"));