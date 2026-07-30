// /**
//  * @param {string[]} words
//  * @return {number[][]}
//  */
// var palindromePairs = function(words) {

// };

const words = ["abcd", "dcba", "lls", "s", "sssll"]
let result = []
let pair = ''

let suffix = 1
let prefix = 0

for (let i = 0; i < 18; i++) {
    let start = 0
    pair = words[prefix] + words[suffix];
    for (let j = pair.length - 1; j > 0; j--) {
        if (pair[j] === pair[start]) {
            start++;
        }
    }
    if (start === pair.length - 1) {
        console.log(pair)
        result.push([prefix, suffix])
        suffix--
        prefix++
    } else {
        prefix++
    }
}
console.log(result)