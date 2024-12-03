---
publish: true
date: 2024/12/03 15:21
title: Binary Search
project: leetcode-every-day
tags:
 - Algorithms
---

# Binary Search

```javascript
/**
 * Implements the Binary Search algorithm to find the index of a target value in the sorted array.
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            // If the middle element matches the target, return its index.
            return mid;
        }
    }

    return -1;
}
```
