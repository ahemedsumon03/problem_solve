// findLeaders

function findLeaders(arr) {
    let leaders = [];
    let max = arr[arr.length - 1];
    leaders.push(max);

    for (let i = arr.length - 2; i >=0; i--) {
        if (arr[i] > max) {
            max = arr[i];
            leaders.push(max);
        } 
    }

    return leaders.reverse();
}

console.log(findLeaders([16, 17, 4, 3, 5, 2]));