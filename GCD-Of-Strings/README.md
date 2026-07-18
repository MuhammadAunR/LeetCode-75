# 1071. Greatest Common Divisor of Strings

## Problem

For two strings `str1` and `str2`, we say that **`str2` divides `str1`** if and only if `str1` can be formed by concatenating one or more copies of `str2`.

In other words:

```text
str1 = str2 + str2 + str2 + ... + str2
```

Given two strings `str1` and `str2`, return the **largest string** `x` such that `x` divides both `str1` and `str2`.

If no such string exists, return an empty string `""`.

---

## Examples

### Example 1

**Input**

```text
str1 = "ABCABC"
str2 = "ABC"
```

**Output**

```text
"ABC"
```

---

### Example 2

**Input**

```text
str1 = "ABABAB"
str2 = "ABAB"
```

**Output**

```text
"AB"
```

---

### Example 3

**Input**

```text
str1 = "LEET"
str2 = "CODE"
```

**Output**

```text
""
```

---

### Example 4

**Input**

```text
str1 = "AAAAAB"
str2 = "AAA"
```

**Output**

```text
""
```

---

## Constraints

- `1 <= str1.length, str2.length <= 1000`
- `str1` and `str2` consist only of uppercase English letters.

---

## Function Signature (JavaScript)

```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

};
```