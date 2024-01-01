// isValidParenthesis

function isValidParenthesis(st) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < st.length; i++) {
        if (st[i] in map) {
            stack.push(st[i]);
        } else {
            if (st[i] !== map[stack.pop()]) { 
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValidParenthesis("{[()]}"));
console.log(isValidParenthesis("([)]"));