// findtheDifference

function findtheDifference(str, str2) {
    let sum = 0
    let sum2 = 0
    for (let i = 0; i < str.length; i++) {
        console.log(str.charCodeAt(i)) // get acii code by this number
        sum += str.charCodeAt(i)
        // console.log(sum)
    }
    for (let i = 0; i < str2.length; i++) {
        console.log(str.charCodeAt(i)) // get acii code by this number
        sum2 += str2.charCodeAt(i)
        // console.log(sum2)
    }

    console.log(`Sum is ${sum}`)
    console.log(`Sum2 is ${sum2}`)

    return String.fromCharCode(sum2 - sum) // by this function get charter of this ascii code
}


console.log(findtheDifference('abcd', 'abcde'))