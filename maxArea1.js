function maxArea(height) {
    
    let totalWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let hight = Math.min(height[left], height[right]);
        let width = right - left;
        let currentWater = hight * width;
        totalWater = Math.max(currentWater, totalWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return totalWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));