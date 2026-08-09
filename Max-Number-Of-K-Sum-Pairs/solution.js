/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {

    // Constraints
    if (nums.length < 1 || nums.length > 10 ** 5) {
        return 'Array must contain between 1 and 10 ** 5 elements.'
    }

    for (const num of nums) {
        if (num < 1 || num > 10 ** 9) {
            return 'Each number in array must be between 1 and 10 ** 9.'
        }
    }

    if (k < 1 || k > 10 ** 9) {
        return 'k must be between 1 and 10 ** 9.'
    }

    const frequenciesMap = new Map()
    for (const num of nums) {
        const currentCount = frequenciesMap.get(num) || 0;
        frequenciesMap.set(num, currentCount + 1)
    }

    let maxOperations = 0;

    for (const [num, countOfNum] of frequenciesMap) {
        const x = k - num;
        const countOfX = frequenciesMap.get(x) || 0;

        if (num === x) {
            maxOperations += Math.floor(countOfNum / 2);
        } else if (countOfX > 0) {
            maxOperations += Math.min(countOfNum, countOfX);

            frequenciesMap.set(num, 0);
            frequenciesMap.set(x, 0);
        }
    }
    return maxOperations
};