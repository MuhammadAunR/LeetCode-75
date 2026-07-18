# Merge Strings Alternately

## Problem

You are given two strings, `word1` and `word2`.

Merge the strings by adding letters in **alternating order**, starting with `word1`.

If one string is longer than the other, append the remaining characters to the end of the merged string.

Return the merged string.

---

## Examples

### Example 1

**Input**

```text
word1 = "abc"
word2 = "pqr"
```

**Output**

```text
"apbqcr"
```

**Explanation**

```text
word1:   a   b   c
word2:     p   q   r
merged:  a p b q c r
```

---

### Example 2

**Input**

```text
word1 = "ab"
word2 = "pqrs"
```

**Output**

```text
"apbqrs"
```

**Explanation**

Since `word2` is longer, `"rs"` is appended at the end.

```text
word1:   a   b
word2:     p   q   r   s
merged:  a p b q r s
```

---

### Example 3

**Input**

```text
word1 = "abcd"
word2 = "pq"
```

**Output**

```text
"apbqcd"
```

**Explanation**

Since `word1` is longer, `"cd"` is appended at the end.

```text
word1:   a   b   c   d
word2:     p   q
merged:  a p b q c d
```

---

## Constraints

- `1 <= word1.length, word2.length <= 100`
- `word1` and `word2` consist only of lowercase English letters.

---

## Function Signature (JavaScript)

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

};
```