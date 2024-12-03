---
publish: true
date: 2024/12/03 19:34
title: Quick Sort
project: leetcode-every-day
tags:
 - Algorithms
---

# Quick Sort

```javascript
/**
 * Implements the Quick Sort algorithm to sort an array in ascending order.
 */
function quickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted.
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr.at(-1); // Choose the last element as the pivot.
    const left = []; // Array to hold the elements less than the pivot.
    const right = []; // Array to hold the elements greater than or equal to the pivot.

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right arrays and combine with the pivot.
    return [...quickSort(left), pivot, ...quickSort(right)];
}
```
```javascript
/**
 * Implementation two (in-place).
 */
function quickSort(arr, left, right) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
}

/**
 * Partition function to rearrange elements around the pivot.
 */
function partition(arr, left, right) {
    const pivot = arr[right]; // Choose the last element as the pivot.
    let i = left;
    let j = right - 1;

    while (1) {
        // Move i forward while elements are less than the pivot.
        while (i < right && arr[i] < pivot) i++;
        // Move j backward while elements are greater that the pivot.
        while (j > left && arr[j] >= pivot) j--;

        // If pointers cross, partition is done.
        if (i >= j) break;

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Place the pivot in its correct position.
    [arr[i], arr[right]] = [arr[right], arr[i]];

    return i;
}
```
