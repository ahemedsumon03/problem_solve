function SearchRange(nums, search) {
   
    if (nums.indexOf(search) === -1) return [-1, -1];
    else return ([nums.indexOf(search), nums.lastIndexOf(search)])
}

console.log(SearchRange([5, 7, 7, 8, 8, 10], 5));