function relativeSortArray(arr1, arr2) {
    let count = new Map();

    for (const num of arr1) {
        if (count.has(num)) {
            count.set(num, count.get(num) + 1);
        } else {
            count.set(num, 1);
        }
    }


    let result = [];

    for (const num of arr2) {
        let amount = count.get(num);
        if (amount > 0) {
            result.push(num);
            amount--;
        }

        count.delete(num);
    }

    for (let num = 0; num <= 1000; num++) {
        let amount = count.get(num);
        while (amount > 0) {
            result.push(num);
            amount--;
        }

        count.delete(num);
    }

    return result;
}

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));