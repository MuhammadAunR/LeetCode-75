/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {

    // Constraints
    if (extraCandies < 1 || extraCandies > 50) {
        return 'Extra Candies must be greater than or equals to 1 and less than or equals to 50'
    } else if (candies.length < 2 || candies.length > 100) {
        return 'Array must contain at least 2 elements or maximum 100'
    }
    if (candies.some(candy => candy < 1 || candy > 100)) {
        return 'Each kids must have candies greater than or equal to 1 and less than or equals to 100'
    }


    // get kid with maximum candies
    let max = candies[0]
    for (let i = 0; i < candies.length; i++) {
        if (max < candies[i]) {
            max = candies[i]
        }
    }

    // got the array after giving each kids extraCandies
    let kidsWithExtraCandies = candies.map(candy => candy + extraCandies)

    // Check function
    let result = []
    kidsWithExtraCandies.forEach(element => {
        result.push(element >= max)
    });

    return result
};
