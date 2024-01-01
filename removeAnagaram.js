function isAnagram(num1, num2) {
    return num1.split('').sort().join('') === num2.split('').sort().join('');

} 

function removeAnagaram(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            // console.log(arr[i], arr[j]);
            if (isAnagram(arr[i], arr[j])) {
                result.push(arr[i]);
                break;
            }
        }
    }
    return result;
}

console.log(removeAnagaram(["abba", "baba", "bbaa", "cd", "cd"]));