# 334. Increasing Triplet Subsequence

## Problem

Given an integer array `nums`, return `true` if there exists a triplet of indices `(i, j, k)` such that:

- `i < j < k`
- `nums[i] < nums[j] < nums[k]`

If no such triplet exists, return `false`.

---

## Examples

### Example 1

**Input**

```text
nums = [1,2,3,4,5]
```

**Output**

```text
true
```

**Explanation**

Any triplet where `i < j < k` is valid.

---

### Example 2

**Input**

```text
nums = [5,4,3,2,1]
```

**Output**

```text
false
```

**Explanation**

No increasing triplet exists.

---

### Example 3

**Input**

```text
nums = [2,1,5,0,4,6]
```

**Output**

```text
true
```

**Explanation**

One valid triplet is `(1, 4, 6)` because:

```text
nums[1] = 1 < nums[4] = 4 < nums[5] = 6
```

> **Note:** This is just one valid example. Another valid triplet is `(0, 4, 6)` using indices `(3, 4, 5)`.

---

## Constraints

- `1 <= nums.length <= 5 × 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`

---

## Follow-up

Can you implement a solution that runs in:

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

---

## Function Signature (JavaScript)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {

};
```