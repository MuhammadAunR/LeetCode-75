/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    // Constraints
    if (nums.length < 2 || nums.length > 10 ** 5) {
        return 'Array length must be greater than or equals to 2 or less than or equals to 10 ** 5'
    }
    for (const element of nums) {
        if (element < -30 || element > 30) {
            return 'Array element must be greater than or equals to -30 or less than or equals to 30';
        }
    }

    let result = []
    let prefix = 1

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            result[i] = prefix
            prefix *= nums[0]
        } else {
            result[i] = prefix + 0
            prefix *= nums[i]
        }
    }

    let suffix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = (result[i] * suffix) + 0
        suffix *= nums[i]
    }
    return result
};

console.log(productExceptSelf([1, 2, 3, 4]))