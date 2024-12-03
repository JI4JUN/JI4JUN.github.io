---
publish: true
date: 2024/12/03 13:10
title: Bubble Sort
project: leetcode-every-day
tags:
 - Algorithms
---

# Bubble Sort

```javascript
/**
 * Implements the Bubble Sort algorithm to sort an array in ascending order.
 */
function bubbleSort(arr) {
    let swapped; // Flag to indicate if a swap occurred in the current iteration.

    for (let i = 0; i < arr.length; i++) {
        swapped = false; // Reset the swapped flag.

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Mark that a swap occurred
            }
        }

        // If no swaps occurred during this pass, the array is already sorted.
        if (!swapped) {
            break;
        }
    }

    return arr;
}
```
