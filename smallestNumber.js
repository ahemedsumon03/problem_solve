// leetcode problem 2375
// Construct Smallest Number From DI String

function smallestNumber(pattern) {
    const ans = [];
    let stack = [];

    for (let i = 0; i <= pattern.length; i++) {
        stack.push(i + 1);
        
        if (pattern[i] === 'I' || i === pattern.length) {
            console.log(`stack-> ${stack}`);
            ans.push(...stack.reverse());
            stack = [];
        }
    }

    return ans.join('');

}

console.log(smallestNumber("DDD"));