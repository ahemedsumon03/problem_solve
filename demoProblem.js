function decodeString(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
        } else {
            let result = '';
            while (stack[stack.length - 1] !== '[') { 
                result = stack.pop() + result;
            }

            stack.pop();
            let num = '';
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num;
            }
            stack.push(result.repeat(num));
        }
    }

    return stack.join('');
}

console.log(decodeString('3[a2[c]]'));