/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function (distance) {

    // Constraints
    if (distance.length < 1 || distance.length > 10 ** 5) {
        return 'Array length must be greater than or equals to 1 or less than or equals to 10 ** 5'
    } if (distance.some(dis => dis < 1 || dis > 10 ** 5)) {
        return 'Array elements must be greater than or equals to 1 or less than or equals to 10 ** 5'
    }

    for (let i = 3; i < distance.length; i++) {
        if ((distance[i] >= distance[i - 2] && distance[i - 1] <= distance[i - 3])
            || (i >= 4 && distance[i - 2] <= (distance[i] + distance[i - 4]) && distance[i - 1] === distance[i - 3])
            || (i >= 5 && (distance[i] + distance[i - 4]) >= distance[i - 2] && distance[i - 2] >= distance[i - 4]
                && (distance[i - 5] + distance[i - 1]) >= distance[i - 3] && distance[i - 1] < distance[i - 3])
        ) {
            return true
        }
    }
    return false
};

console.log(isSelfCrossing([2, 1, 4, 4, 3, 3, 2, 1, 1]))