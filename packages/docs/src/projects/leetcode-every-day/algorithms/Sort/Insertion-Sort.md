---
publish: true
date: 2024/12/04 15:11
title: Insertion Sort
project: leetcode-every-day
tags:
 - Algorithms
---

# Insertion Sort

```javascript
/**
 * Implements the Insertion Sort algorithm to sort an array in ascending order.
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const base = arr[i]; // Store the current element to be inserted.
        let j = i - 1;

        while (j >= 0 && arr[j] > base) {
            arr[j + 1] = arr[j]; // Move the larger element one position to the right.
            j--;
        }

        arr[j + 1] = base; // Place the base element in its correct position.
    }
}
```
