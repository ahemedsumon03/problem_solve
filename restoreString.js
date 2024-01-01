function restoreString(s, indices) {
    let ar = new Array(indices.length)
    s = s.split("")
    console.log(s);
    for (let i = 0; i < s.length; i++) {
        ar[indices[i]] = s[i]
    }
    return ar.join("")
}


console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));

// restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]); // leetc