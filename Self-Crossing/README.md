# 335. Self Crossing

- **Difficulty:** Hard
- **Topics:** Geometry, Math
- **Companies:** Premium

## Problem Statement

You are given an array of integers `distance`.

You start at the point `(0, 0)` on an X-Y plane, and you move `distance[0]` meters to the north, then `distance[1]` meters to the west, `distance[2]` meters to the south, `distance[3]` meters to the east, and so on. After each move, your direction changes counter-clockwise.

Return `true` if your path crosses itself; otherwise, return `false`.

---

## Example 1

<p align="center">
  <img src="https://assets.leetcode.com/uploads/2022/12/21/11.jpg" alt="Graphical Representation for Example 1" width="350">
</p>

**Input:**

```text
distance = [2,1,1,2]
```

**Output:**

```text
true
```

**Explanation:**

The path crosses itself at the point `(0, 1)`.

---

## Example 2

<p align="center">
  <img src="https://assets.leetcode.com/uploads/2022/12/21/22.jpg" alt="Graphical Representation for Example 2" width="350">
</p>

**Input:**

```text
distance = [1,2,3,4]
```

**Output:**

```text
false
```

**Explanation:**

The path does not cross itself.

---

## Example 3

<p align="center">
  <img src="https://assets.leetcode.com/uploads/2022/12/21/33.jpg" alt="Graphical Representation for Example 3" width="350">
</p>

**Input:**

```text
distance = [1,1,1,2,1]
```

**Output:**

```text
true
```

**Explanation:**

The path crosses itself at the point `(0, 0)`.

---

## Constraints

- `1 <= distance.length <= 10^5`
- `1 <= distance[i] <= 10^5`