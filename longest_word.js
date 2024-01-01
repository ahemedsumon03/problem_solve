// longest word with reduce method

function longsetword(str){
    let word = str.split(' ');
    let longest = word.reduce(function(a,b){
        return a.length > b.length ? a : b;
    });
    return longest;
}

console.log(longsetword('My name is john vercel'));