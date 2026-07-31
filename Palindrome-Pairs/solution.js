/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {

    // Constraints
    if (words.length < 1 || words.length > 5000) {
        return 'Array length must be greater than or equals to 1 or less than or equals to 5000'
    }
    if (words.some(word => word.length < 0 || word.length > 300)) {
        return 'Each word in array must be greater than or equals to 0 or less than or equals to 300'
    }

    const asciiCharacters = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    for (const word of words) {
        if (!asciiCharacters.includes(word)) {
            return 'Each word only consist of lowercase English letters'
        }
    }

    let result = []

    const wordMap = new Map()
    for (let i = 0; i < words.length; i++) {
        wordMap.set(words[i], i)
    }

    const reverseWord = (word) => {
        return word.split('').reverse().join('')
    }

    const isPalindrome = (word) => {
        let left = 0;
        let right = word.length - 1;

        while (left < right) {
            if (word[left] !== word[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    };

    for (const [index, word] of words.entries()) {
        for (let i = 0; i <= word.length; i++) {
            const prefix = word.slice(0, i)
            const suffix = word.slice(i)
            if (isPalindrome(prefix)) {
                let matchIndex = wordMap.get(reverseWord(suffix))
                if (matchIndex !== undefined && matchIndex !== index) {
                    result.push([matchIndex, index])
                }
            }
            if (isPalindrome(suffix) && suffix.length > 0) {
                let matchIndex = wordMap.get(reverseWord(prefix))
                if (matchIndex !== undefined && matchIndex !== index) {
                    result.push([index, matchIndex])
                }
            }
        }
    };
    return result
};
