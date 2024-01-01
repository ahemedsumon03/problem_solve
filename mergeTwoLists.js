function mergeTwoList(list1, list2) {
    let i = 0
    let j = 0
    let result = []
    
    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            result.push(list1[i])
            i++
        } else {
            result.push(list2[j])
            j++
        }
    }
    while (i < list1.length) {
        result.push(list1[i])
        i++
    }
    while (j < list2.length) {
        result.push(list2[j])
        j++
    }
    return result
}

console.log(mergeTwoList([1, 2, 4], [1, 3, 4]))

// In this code two sorted array is exists. check first array element less than second array element. If it true first array index increment otherwise second arry index increment.

// [1,1,2,3,4,4]