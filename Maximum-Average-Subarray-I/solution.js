/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    // Constraints
    if (nums.length < 1 || nums.length > 10 ** 5) {
        throw new Error("Array length must be between 1 and 10 ** 5");
    } else if (k < 1 || k > nums.length) {
        throw new Error("k must be greater than or equals to 1 or less than or equals to array length");
    }
    for (const num of nums) {
        if (num < -(10 ** 4) || num > (10 ** 4)) {
            throw new Error("Each array element must be between -10 ** 4 and 10 ** 4");
        }
    }

    const calculateAvg = (i) => {
        let avg = 0
        let j = i
        while (j < k + i) {
            avg += nums[j]
            j++
        }
        avg = avg / k
        return avg
    }

    let maxAvg = calculateAvg(0)
    for (let i = 0; i < nums.length; i++) {
        if (i <= nums.length - k) {
            let temp = calculateAvg(i)
            if (temp > maxAvg) {
                maxAvg = temp
            }
        }
    }
    return maxAvg
};