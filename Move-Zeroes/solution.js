/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    // Constraints
    if (nums.length < 1 || nums.length > 10 ** 4) {
        return 'Array must be greater than or equals to 1 and less than or equals to 10 ** 4'
    } if (nums.some(num => num < -(2 ** 31) || num > 2 ** 31 - 1)) {
        return 'Each array element must greater than or equal to -2 ** 31 and less than or equals to  2 ** 31 - 1'
    }

    let loopItrations = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            loopItrations++
        }
    }
    while (loopItrations) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === 0) {
                let temp = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = temp
            }
        }
        loopItrations--
    }
};

let nums = [1, 0, 2, 3, 0, 4, 5, 0]
moveZeroes(nums)
console.log(nums)