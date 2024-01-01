function isObjectEmpty(obj) {
    for (let key in obj) { // by for in loop we can iterate over object and also in  array
        return false
    }
    return true;
}

console.log(isObjectEmpty({}));