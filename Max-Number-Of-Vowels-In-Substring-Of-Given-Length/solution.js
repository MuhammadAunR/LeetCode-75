/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {


    // Constraints
    if (s.length < 1 || s.length > 10 ** 5) {
        throw new Error("String length must be between 1 and 10 ** 5");
    }
    if (k < 1 || k > s.length) {
        throw new Error("Value of 'k' must be greater than or equals to 1 or less than string length");
    }
    for (const char of s) {
        if (char.charCodeAt(0) < 97) {
            throw new Error("String must contain only lower English letters");

        }
    }


    let vowels = ['a', 'e', 'i', 'o', 'u']
    let n = s.length
    let maxVowels = 0
    let currentVowels = 0

    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) currentVowels++;
    }

    maxVowels = currentVowels

    for (let i = k; i < n; i++) {
        if (vowels.includes(s[i])) currentVowels++;
        if (vowels.includes(s[i - k])) currentVowels--;

        if (currentVowels > maxVowels) maxVowels = currentVowels
    }

    return maxVowels
};