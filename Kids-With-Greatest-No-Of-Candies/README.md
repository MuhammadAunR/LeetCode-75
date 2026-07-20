# 1431. Kids With the Greatest Number of Candies

## Problem

There are `n` kids with candies. You are given an integer array `candies`, where `candies[i]` represents the number of candies the `i`th kid has, and an integer `extraCandies`, denoting the number of extra candies that you have.

Return a boolean array `result` of length `n`, where:

- `result[i]` is `true` if, after giving the `i`th kid **all** the `extraCandies`, they will have the **greatest number of candies** among all the kids.
- Otherwise, `result[i]` is `false`.

> **Note:** Multiple kids can have the greatest number of candies.

---

## Examples

### Example 1

**Input**

```text
candies = [2,3,5,1,3]
extraCandies = 3
```

**Output**

```text
[true, true, true, false, true]
```

**Explanation**

- Kid 1: `2 + 3 = 5` → Greatest ✅
- Kid 2: `3 + 3 = 6` → Greatest ✅
- Kid 3: `5 + 3 = 8` → Greatest ✅
- Kid 4: `1 + 3 = 4` → Not the greatest ❌
- Kid 5: `3 + 3 = 6` → Greatest ✅

---

### Example 2

**Input**

```text
candies = [4,2,1,1,2]
extraCandies = 1
```

**Output**

```text
[true, false, false, false, false]
```

**Explanation**

There is only **1 extra candy**.

Kid 1 already has the greatest number of candies and will remain the greatest regardless of which kid receives the extra candy.

---

### Example 3

**Input**

```text
candies = [12,1,12]
extraCandies = 10
```

**Output**

```text
[true, false, true]
```

---

## Constraints

- `n == candies.length`
- `2 <= n <= 100`
- `1 <= candies[i] <= 100`
- `1 <= extraCandies <= 50`

---

## Function Signature (JavaScript)

```javascript
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

};
```