# 345. Reverse Vowels of a String

## Problem

Given a string `s`, reverse **only the vowels** in the string and return the resulting string.

The vowels are:

- `a`
- `e`
- `i`
- `o`
- `u`

Vowels can appear in both **lowercase** and **uppercase**, and they may occur multiple times.

---

## Examples

### Example 1

**Input**

```text
s = "IceCreAm"
```

**Output**

```text
"AceCreIm"
```

**Explanation**

The vowels in `s` are:

```text
['I', 'e', 'e', 'A']
```

After reversing the vowels:

```text
['A', 'e', 'e', 'I']
```

The resulting string becomes:

```text
"AceCreIm"
```

---

### Example 2

**Input**

```text
s = "leetcode"
```

**Output**

```text
"leotcede"
```

---

## Constraints

- `1 <= s.length <= 3 × 10⁵`
- `s` consists of printable ASCII characters.

---

## Function Signature (JavaScript)

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

};
```