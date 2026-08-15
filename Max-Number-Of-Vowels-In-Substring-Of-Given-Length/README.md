# 1456. Maximum Number of Vowels in a Substring of Given Length

[LeetCode](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)

**Status:** Attempted

**Difficulty:** Medium

## Problem

Given a string `s` and an integer `k`, return the maximum number of vowel letters in any substring of `s` with length `k`.

**Vowel letters** in English are:

```text
'a', 'e', 'i', 'o', 'u'
```

## Examples

### Example 1

**Input:**

```text
s = "abciiidef"
k = 3
```

**Output:**

```text
3
```

**Explanation:**

The substring `"iii"` contains `3` vowel letters.

### Example 2

**Input:**

```text
s = "aeiou"
k = 2
```

**Output:**

```text
2
```

**Explanation:**

Any substring of length `2` contains `2` vowels.

### Example 3

**Input:**

```text
s = "leetcode"
k = 3
```

**Output:**

```text
2
```

**Explanation:**

`"lee"`, `"eet"` and `"ode"` contain `2` vowels.

## Constraints

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters.
- `1 <= k <= s.length`

## Function Signature

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {

};
```