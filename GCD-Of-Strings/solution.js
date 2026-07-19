/**
 * @param {string} str1
 * @param {string} str2
 * @return {string} output = ""
 */

var gcdOfStrings = function (str1, str2) {
    if (str1.concat(str2) !== str2.concat(str1)) return output = ""
    let a = str1.length
    let b = str2.length

    while (b) {
        let temp = b
        b = a % b
        a = temp
    }
    return str1.substring(0, a)
};

