/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    const asciiCharacters = [
        " ",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    // Constraints
    if (s.length < 1 || s.length > 10 ** 4) {
        return 'String lenght must be greater than or equals to 1 or less than or equals to 10 ** 4'
    } else if (!s.trim()) {
        return 'String must contain at least one word'
    }
    for (const element of s) {
        if (!asciiCharacters.includes(element)) {
            return "String contains English letters (upper-case and lower-case), digits, and spaces ' ' only"
        }
    }

    let word = ""
    let startIndex = 0

    // Array to store words separately as array element
    let arrayOfWords = []

    while (startIndex < s.length) {
        for (let i = 0; i < s.length; i++) {
            if (s[startIndex] !== ' ') {
                word += s[startIndex]
                startIndex++
            }
            if (s[startIndex] === ' ' || startIndex == s.length) {
                arrayOfWords.push(word)
                word = ''
                startIndex++
            }
        }
    }

    // Array to store the wrods in reverse order
    let output = []
    for (let i = arrayOfWords.length - 1; i >= 0; i--) {
        if (arrayOfWords[i] !== '') {
            output.push(arrayOfWords[i])
        }
    }

    // returning output while converting it back to string
    return (output.join(' '))

};
