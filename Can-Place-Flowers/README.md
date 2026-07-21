# 605. Can Place Flowers

## Problem

You have a long flowerbed in which some of the plots are planted, and some are not. However, **flowers cannot be planted in adjacent plots**.

You are given:

- An integer array `flowerbed` containing `0`s and `1`s, where:
  - `0` represents an **empty** plot.
  - `1` represents a plot that **already has a flower**.
- An integer `n`, representing the number of new flowers to plant.

Return:

- `true` if `n` new flowers can be planted in the flowerbed **without violating the no-adjacent-flowers rule**.
- `false` otherwise.

---

## Examples

### Example 1

**Input**

```text
flowerbed = [1,0,0,0,1]
n = 1
```

**Output**

```text
true
```

---

### Example 2

**Input**

```text
flowerbed = [1,0,0,0,1]
n = 2
```

**Output**

```text
false
```

---

## Constraints

- `1 <= flowerbed.length <= 2 × 10⁴`
- `flowerbed[i]` is either `0` or `1`
- There are **no two adjacent flowers** in `flowerbed`
- `0 <= n <= flowerbed.length`

---

## Function Signature (JavaScript)

```javascript
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

};
```