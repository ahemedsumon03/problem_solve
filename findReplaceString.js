function findReplaceString(s, indices, sources, targets) {
    let res = s.split("");

    for (let i = 0; i < indices.length; i++) {

        const dx = s.substring(indices[i], indices[i] + sources[i].length);
        if (dx === sources[i]) {
            res[indices[i]] = targets[i];
            let j = 1;
            while (j < dx.length)
                console.log(res[indices[i] + (j++)]);
                res[indices[i] + (j++)] = "";
        }
    }

    return res.join("");
}

// eeebffffd
// eeebffff

/*  it's time for us to simply delete extra ones
    let's say indices is [4,6,37], ["k","lkk","oo"],["aa","aaaaaaaaa","jkkkkk"]
    it says that we just need to make changes at let's say at 6, substring lkk with aaaaaaaaa
    after making changes at 6, it is our job to empty position of kk with empty, empty
*/

console.log(findReplaceString(s = "abcd", indices = [0, 2], sources = ["a", "cd"], targets = ["eee", "ffff"]))

// abcd
//eeebffff
