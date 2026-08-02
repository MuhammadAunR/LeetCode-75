/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

    // Constraints
    if (chars.length < 1 || chars.length > 2000) {
        return 'Array length must be greater than or equals to 1 or less than or equals to 2000'
    } if (chars.some(char => char.trim() === '')) {
        return 'Array elements must be lowercase English letter, uppercase English letter, digit, or symbol.'
    }

    let read = 0
    let write = 0

    while (read < chars.length) {

        let start = read

        // Find the end of the consecutive repeating characters/symbols/digits
        while (read < chars.length && chars[read] === chars[start]) {
            read++;
        }

        // Write the character
        chars[write++] = chars[start]

        // Calculate group size
        let count = read - start

        // Write group size(count) into array only if the count is greater than 1
        if (count > 1) {
            for (const digit of String(count)) {
                chars[write++] = digit
            }
        }
    }

    // return the compressed elements count
    return write
};

