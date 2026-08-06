/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    // Constraints
    if (s.length < 0 || s.length > 100) {
        return 'String "s" must contain chars greater than or equals to 0 or less than or equals to 100'
    }
    if (t.length < 0 || t.length > 10 ** 4) {
        return 'String "t" must contain chars greater than or equals to 0 or less than or equals to 10 ** 4'
    }

    const lowercaseEnglishLetters = /^[a-z]+$/;
    if (s.length > 0 && !lowercaseEnglishLetters.test(s)) {
        return 'String "s" must contain only lowercase English letters.';
    }
    if (t.length > 0 && !lowercaseEnglishLetters.test(t)) {
        return 'String "t" must contain only lowercase English letters.';
    }

    let p1 = 0
    let p2 = 0

    while (p1 < s.length && p2 < t.length) {
        if (s[p1] === t[p2]) {
            p1++
        }
        p2++
    }
    return p1 === s.length
};

console.log(isSubsequence('axc', 'ahbgdc'))