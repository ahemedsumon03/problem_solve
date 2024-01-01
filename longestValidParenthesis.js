function longestValidParentheses(s) {
    let stack = [];
    let maxLength = 0;
    let start = -1;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        console.log(`char is ${char}`);

        if (char === '(') {
            stack.push(i);
            console.log(stack);
        } else if (char === ')') {
            console.log('excecute else if block');
            console.log(stack.length)
            if (stack.length === 0) {
                start = i;
                console.log(`start is ${start}`);
            }
            else {
                console.log('excecute else if else block');
                console.log(`stack ${stack.length}`);
                stack.pop();
                console.log(`stack ${stack.length}`);
                if (stack.length === 0) {
                    maxLength = Math.max(maxLength, i - start);
                    console.log(`maxlength : ${maxLength}`)
                } else {
                    maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
                }
            }
        }
    }

    return maxLength;
}

console.log(longestValidParentheses(')()())'));
