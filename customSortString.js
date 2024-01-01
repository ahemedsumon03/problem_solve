function customSortString(order, s) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    let result = '';
    for (let i = 0; i < order.length; i++) {
        if (map.has(order[i])) {
            result += order[i].repeat(map.get(order[i]));
        }

        map.delete(order[i]);
    }

    for (const [key,value] of map) {
        result+=key.repeat(value);
    }

    return result;

}

console.log(customSortString('kqep','pekeq'));