// const prevValues = [];

// function square(n) {

//     if (prevValues[n] != null) {
//         return prevValues[n];
//     }

//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             result += 1;
//         }
//     }
//     prevValues[n] = result;
//     return result;
// }

// console.log(square(120));
// console.log(square(120));
// console.log(square(120));
// console.log(square(120));

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
    // memoization - store the result of the function call in a cache, and reuse it if the same arguments are passed again. This is called memoization. It is a technique used to optimize the performance of recursive functions by storing the results of previous function calls in a cache. This can save time and memory by avoiding redundant function calls. It is a common technique used in computer science and programming.
    // The key idea behind memoization is to store the results of previous function calls in a cache, and reuse them if the same arguments are passed again. This can save time and memory by avoiding redundant function calls.
    // The cache can be implemented using a simple object or a more complex data structure, such as a hash table. The cache is used to store the results of previous function calls, and the cache is accessed when the same arguments are passed again. This can save time and memory by avoiding redundant function calls.
    // The cache is implemented using a simple object or a more complex data structure, such as a hash table. The cache is used to store the results of previous function calls, and the cache is accessed when the same arguments are passed again. This can save time and memory by avoiding redundant function calls.
}

console.log(fib(5));