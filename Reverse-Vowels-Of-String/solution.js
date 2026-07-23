/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

    // Constraints
    if (s.length < 1 || s.length > (3 * 10 ** 5)) {
        return 'String length must be greater than or equals to 1 or less than or equals to 3 * 10 ** 5'
    } if (!/^[\x20-\x7E]*$/.test(s)) {
        return "String consists of printable ASCII characters only"
    }

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    let startIndex = 0;
    let endIndex = s.length - 1;
    let loopItrations = 0


    // convert the string to array
    let arr = Array.from(s);

    arr.forEach(char => {
        if (vowels.includes(char)) {
            loopItrations++
        }
    });

    // loop will run half of total vowels in string
    loopItrations = Math.floor(loopItrations / 2)


    while (loopItrations) {

        if (arr[startIndex] == ' ' || !vowels.includes(arr[startIndex])) {
            startIndex++;
        }
        if (arr[endIndex] == ' ' || !vowels.includes(arr[endIndex])) {
            endIndex--;
        }
        if (vowels.includes(arr[startIndex]) && vowels.includes(arr[endIndex])) {
            let temp = arr[startIndex]
            arr[startIndex] = arr[endIndex]
            arr[endIndex] = temp
            startIndex++;
            endIndex--;
            loopItrations--;
        }
    }
    // converting array back to string while returning
    return (arr.join(''))
};