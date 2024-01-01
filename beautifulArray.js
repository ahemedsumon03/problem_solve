function organize(nums) {
  return nums.filter(num => num % 2 === 0).concat(nums.filter(num => num % 2 !== 0));
}

function beautifulArray(n) {
    let results = [];
    for (let i = 1; i <= n; i++) {
        results.push(i);
    }

    let newArray = organize(results);
    return newArray;
}

console.log(beautifulArray(4));