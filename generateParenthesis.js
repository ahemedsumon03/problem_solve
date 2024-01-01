// generateParenthesis

function generateParenthesis(n) {
    let result = [];
    let str = '';
    function dfs(left, right, str) {
        console.log(`leftrightstr: ${left},${right},${str}`); // (
        // console.log(left == 0 && right == 0);
        if (left === 0 && right === 0) {
            result.push(str);
            console.log(`Result is : ${result}`);
            console.log(`String is: ${str}`);
            return;
        }
        if (left > 0) {
            dfs(left - 1, right, str + '('); // step 1: 2,3, str: (((
        }
        if (right > left) {
            dfs(left, right - 1, str + ')'); // str: ((()))
        }
    }
    dfs(n, n, str);
    return result;
}


console.log(generateParenthesis(3));