/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {

    // constraints
    if (flowerbed.length < 1 || flowerbed.length > (2 * 10 ** 4)) {
        return 'Array lenght must be greater than or equals to 1 or less than or equals to 2 * 10 ** 4'
    } else if (n < 0 || n > flowerbed.length) {
        return 'n must be greater than or equals to 0 or less than or equals to array length.'
    }
    if (flowerbed.some(bed => bed != 0 && bed != 1)) {
        return 'Array must contain 0 or 1 only'
    }
    if (n === 0) return true

    let temp = n
    let conditionToBeTrue = 0

    while (temp) {
        for (let i = 0; i < flowerbed.length; i++) {
            if ((flowerbed[i] < 1 && flowerbed.length === 1) ||
                (flowerbed[i] < 1 && i == 0 && flowerbed[i + 1] < 1) ||
                (flowerbed[i] < 1 && i == flowerbed.length - 1 && flowerbed[i - 1] < 1) ||
                (flowerbed[i] < 1 && flowerbed[i + 1] < 1 && flowerbed[i - 1] < 1)) {
                flowerbed[i] = 1
                conditionToBeTrue++;
                if (conditionToBeTrue === n) break
            }
        }
        if (conditionToBeTrue === n) break
        temp--;
    }
    return (conditionToBeTrue === n ? true : false)
};