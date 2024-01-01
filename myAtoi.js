function myAtoi(s) {
    const number = parseInt(s);
    if (isNaN(number)) return 0;
    else if (number < Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    else if (number > -1*Math.pow(2, 31)) {
        return -1 * Math.pow(2, 31);
    }
    else {
        return number;
    }

}

console.log(myAtoi('words and 987'));
