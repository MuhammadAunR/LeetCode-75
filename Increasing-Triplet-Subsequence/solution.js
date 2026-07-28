/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    // Constraints
    if (nums.length < 1 || nums.length > 5 * 10 ** 5) {
        return 'Array must be greater than or equals to 1 and less than or equals to 5 * 10 ** 5'
    }
    if (nums.some(num => num < -(2 ** 31) || num > 2 ** 31 - 1)) {
        return 'Array elements must be within -(2 ** 31) and (2 ** 31) - 1'
    }

    let first = Infinity
    let second = Infinity

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= first) {
            first = nums[i]
        } else if (nums[i] <= second && first < nums[i]) {
            second = nums[i]
        } else if (first < nums[i] && second < nums[i]) {
            return true
            break
        }
    }
    return false
};