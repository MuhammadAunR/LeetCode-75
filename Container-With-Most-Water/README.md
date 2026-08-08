# 11. Container With Most Water

## Problem

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

> Notice that you may not slant the container.

## Examples

### Example 1

<p align="center">
  <img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" alt="Graphical Representation of array" width="350">
</p>

**Input:**
```text
height = [1,8,6,2,5,4,8,3,7]
```

**Output:**
```text
49
```

**Explanation:**

The maximum amount of water the container can store is `49`.

### Example 2

**Input:**
```text
height = [1,1]
```

**Output:**
```text
1
```

## Constraints

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

## Function Signature

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

};
```