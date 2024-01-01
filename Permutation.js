function permute(nums) {
    let result = []
    console.log('start line 3');
    function dfs(nums, path) {
        console.log(nums.length === 0);
        if (nums.length === 0) {
            console.log(`path-> ${path}`);
            result.push(path)
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            console.log(nums.slice(0, i).concat(nums.slice(i + 1)));
            dfs(nums.slice(0, i).concat(nums.slice(i + 1)), path.concat(nums[i]))
        }
    }
    dfs(nums, [])
    return result;
}

console.log(permute([1, 2, 3]));