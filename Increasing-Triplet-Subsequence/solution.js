// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var increasingTriplet = function (nums) {

//     // Constraints
//     if (nums.length < 1 || nums.length > 5 * 10 ** 5) {
//         return 'Array must be greater than or equals to 1 and less than or equals to 5 * 10 ** 5'
//     }
//     if (nums.some(num => num < -(2 ** 31) || num > 2 ** 31 - 1)) {
//         return 'Array elements must be within -2 ** 31 and 2 ** 31 -1'
//     }

//     let firstMinimum = 0;
//     let secondMinimum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < nums[i + 1]) {
//             firstMinimum = i
//             break
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[firstMinimum] < nums[i + 1]) {
//             secondMinimum = i + 1
//             break
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[secondMinimum] < nums[i + 1]) {
//             return true
//             break
//         }
//     }
//     return false
// };

let nums = [20, 100, 10, 12, 5, 13]
let output = false
let first = 0
let second = 0

for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] < nums[first]) {

    }
}
console.log(output)