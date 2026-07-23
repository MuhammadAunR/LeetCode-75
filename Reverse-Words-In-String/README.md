# 151. Reverse Words in a String

## Problem

Given an input string `s`, reverse the order of the words.

A **word** is defined as a sequence of **non-space characters**. The words in `s` are separated by at least one space.

Return a string containing the words in **reverse order**, separated by a **single space**.

> **Note:**
>
> - `s` may contain leading or trailing spaces.
> - `s` may contain multiple spaces between words.
> - The returned string should **not** contain leading or trailing spaces.
> - The returned string should contain **only one space** between words.

---

## Examples

### Example 1

**Input**

```text
s = "the sky is blue"
```

**Output**

```text
"blue is sky the"
```

---

### Example 2

**Input**

```text
s = "  hello world  "
```

**Output**

```text
"world hello"
```

**Explanation**

The reversed string should not contain leading or trailing spaces.

---

### Example 3

**Input**

```text
s = "a good   example"
```

**Output**

```text
"example good a"
```

**Explanation**

Multiple spaces between words should be reduced to a single space in the returned string.

---

## Constraints

- `1 <= s.length <= 10⁴`
- `s` contains:
  - Uppercase English letters (`A-Z`)
  - Lowercase English letters (`a-z`)
  - Digits (`0-9`)
  - Spaces (`' '`)
- There is at least one word in `s`.

---

## Follow-up

If the string data type is mutable in your language, can you solve it **in-place** with **O(1)** extra space?

---

## Function Signature (JavaScript)

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

};
```