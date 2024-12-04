---
publish: true
date: 2024/12/04 23:53
title: Selection Sort
project: leetcode-every-day
tags:
 - Algorithms
---

# Selection Sort

```javascript
/**
 * Implements the Selection Sort algorithm to sort an array in ascending order.
 */
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let k = i;

        // Find the index of minimum element.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[k]) {
                k = j;
            }
        }

        // Swap the minimum element with the current element.
        [arr[i], arr[k]] = [arr[k], arr[i]];
    }
}
```
