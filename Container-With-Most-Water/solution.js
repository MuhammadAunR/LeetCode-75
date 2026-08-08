/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    // Constraints
    if (height.length < 2 || height.length > 10 ** 5) {
        return 'Array length must be greater than or equals to 2 or less than or equals to 10 ** 5'
    }
    if (height.some(n => n < 0 || n > 10 ** 4)) {
        return 'Each array element must be greater than or equals to 0 or less than or equals to 10 ** 4'
    }


    // Helper function to calculate maximum area
    const calculateMax = (leftIndex, rightIndex) => {
        let w = rightIndex - leftIndex;
        let h = height[leftIndex] < height[rightIndex] ? height[leftIndex] : height[rightIndex];
        let area = h * w;
        return area;
    }

    let left = 0;
    let right = height.length - 1;
    let max = calculateMax(left, right);

    for (let i = 0; i < height.length; i++) {
        let temp = calculateMax(left, right);;
        if (temp > max) {
            max = temp
        }
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))