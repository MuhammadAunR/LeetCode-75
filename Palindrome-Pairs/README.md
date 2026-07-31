# 336. Palindrome Pairs

## Problem

You are given a **0-indexed** array of **unique** strings `words`.

A **palindrome pair** is a pair of integers `(i, j)` such that:

- `0 <= i, j < words.length`
- `i != j`
- `words[i] + words[j]` (the concatenation of the two strings) is a palindrome.

Return an array of all the palindrome pairs of `words`.

You must write an algorithm with **O(sum of words[i].length)** runtime complexity.

---

## Examples

### Example 1

**Input**

```text
words = ["abcd","dcba","lls","s","sssll"]
```

**Output**

```text
[[0,1],[1,0],[3,2],[2,4]]
```

**Explanation**

The resulting palindromes are:

```text
"abcddcba"
"dcbaabcd"
"slls"
"llssssll"
```

---

### Example 2

**Input**

```text
words = ["bat","tab","cat"]
```

**Output**

```text
[[0,1],[1,0]]
```

**Explanation**

The resulting palindromes are:

```text
"battab"
"tabbat"
```

---

### Example 3

**Input**

```text
words = ["a",""]
```

**Output**

```text
[[0,1],[1,0]]
```

**Explanation**

The resulting palindromes are:

```text
"a"
"a"
```

---

## Constraints

- `1 <= words.length <= 5000`
- `0 <= words[i].length <= 300`
- `words[i]` consists only of lowercase English letters.
- All strings in `words` are **unique**.

---

## Function Signature (JavaScript)

```javascript
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {

};
```