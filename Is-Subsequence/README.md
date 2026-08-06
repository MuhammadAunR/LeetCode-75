# 392. Is Subsequence

## Problem

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.

For example:

```text
"ace" is a subsequence of "abcde"
```

while:

```text
"aec" is not a subsequence of "abcde"
```

## Examples

### Example 1

**Input:**

```text
s = "abc"
t = "ahbgdc"
```

**Output:**

```text
true
```

### Example 2

**Input:**

```text
s = "axc"
t = "ahbgdc"
```

**Output:**

```text
false
```

## Constraints

- `0 <= s.length <= 100`
- `0 <= t.length <= 10^4`
- `s` and `t` consist only of lowercase English letters.

## Follow-up

Suppose there are lots of incoming strings `s`, say:

```text
s1, s2, ..., sk
```

where `k >= 10^9`, and you want to check one by one whether `t` has `s` as a subsequence.

In this scenario, how would you change your code?

## Function Signature

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

};
```