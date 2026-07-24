// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {

//     // Constraints
//     if (nums.length < 2 || nums.length > 10 ** 5) {
//         return 'Array length must be greater than or equals to 2 or less than or equals to 10 ** 5'
//     }
//     for (const element of nums) {
//         if (element < -30 || element > 30) {
//             return 'Array element must be greater than or equals to -30 or less than or equals to 30';
//         }
//     }

//     let output = []
//     let temp

//     for (let i = 0; i < nums.length; i++) {
//         let result = nums.filter((num, index) => index !== i)
//         temp = result.reduce((product, num) => product * num, 1)
//         output.push(temp === -0 ? 0 : temp)
//     }
//     return output
// };

// console.log(productExceptSelf())

let nums = [-1, 1, 0, -3, 3]
let result = []
let prefix = 1
// result = [1, 1, 1, 0, 0,0]
for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
        result[i] = prefix
    } else {
        result[i] = prefix
        prefix *= nums[i]
    }
}

let suffix = 1
for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix
    suffix *= nums[i]
}
console.log(result)
