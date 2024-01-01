function decodeString(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
            console.log(`stack: ${stack}`);
        } else {
            let str = '';
            console.log(`stack length index value : ${stack[stack.length - 1]}`)
            while (stack[stack.length - 1] !== '[') {
                // console.log(`stack pop: ${stack.pop()}`)
                str = stack.pop() + str;
                console.log(`string-> ${str}`);
            }
            let popvalue = stack.pop();
            console.log(`stack pop: ${popvalue}`)
            let num = '';
            console.log(`stack length: ${stack.length}`);
            // console.log(stack.length)
            console.log(stack.length > 0 && !isNaN(stack[stack.length - 1]));
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                // console.log(`stack pop inside while loop: ${stack.pop()}`)
                let secondPop = stack.pop();
                console.log(`second pop: ${secondPop}`);
                console.log(`num-> ${num}`);
                num = secondPop + num;
                console.log(`num: ${num}`)
            }
            console.log(`string: ${str}`);
            let value = str.repeat(num);
            console.log(`repeat value: ${value}`);
            stack.push(value);
        }
    }
    return stack.join('');
}

console.log(decodeString('3[a2[c]]'));