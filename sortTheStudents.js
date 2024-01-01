function sortTheStudents(score, k) {
    let sorted = score.sort((a,b) => b[k] - a[k]);
    return sorted;
}

console.log(sortTheStudents([[10, 6, 9, 1], [7, 5, 11, 2], [4, 8, 3, 15]],2));