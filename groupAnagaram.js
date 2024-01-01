function groupAnagaram(strs) {
    const map = new Map();
    for (let str of strs) {
        // console.log(str);
        // console.log(str)
        const sorted = str.split("").sort().join("");
        console.log(sorted)
        // console.log(map.has(sorted))
        if (map.has(sorted)) {
            console.log('excute 1');
            map.get(sorted).push(str);
            // console.log(map.get(sorted));
        } else {
            console.log('excute 2');
            map.set(sorted, [str]);
            // console.log(map.get(sorted));
        }
    }
    console.log(map);
    return Array.from(map.values());
    // return Array.from(map.values());
}

console.log(groupAnagaram(["eat", "tea", "tan", "ate", "nat", "bat"]));