---
publish: true
date: 2024/12/03 16:24
title: Heap/Priority Queue
project: leetcode-every-day
tags:
 - Data Structures
---

# Heap/Priority Queue

## Min-heap
```javascript
class MinHeap {
    private nodes;

    constructor() {
        this.nodes = [];
    }

    /**
     * Swaps two elements in the heap based on their indices.
     */
    private swap(index1, index2) {
        [this.nodes[index1], this.nodes[index2]] = [this.nodes[index2], this.nodes[index1]];
    }

    /**
     * Determines if a child node should be swapped with its parent node.
     */
    private shouldSwap(childIndex, parentIndex) {
        if (childIndex < 0 || childIndex >= this.nodes.length) {
            return false;
        }
        if (parentIndex < 0 || parentIndex >= this.nodes.length) {
            return false;
        }

        return this.nodes[childIndex] < this.nodes[parentIndex];
    }

    /**
     * Restores the heap property by moving a node downwards as needed.
     */
    private heapifyDown(startIndex) {
        const leftChildIndex = 2 * startIndex + 1;
        const rightChildIndex = 2 * startIndex + 2;
        let smallestIndex = startIndex;

        // Compare the left child.
        if (leftChildIndex < this.nodes.length && this.nodes[leftChildIndex] < this.nodes[smallestIndex]) {
            smallestIndex = leftChildIndex;
        }
        // Compare the right child.
        if (rightChildIndex < this.nodes.length && this.nodes[rightChildIndex] < this.nodes[smallestIndex]) {
            smallestIndex = rightChildIndex;
        }
        // If a smaller child is found, swap and continue heapifying down.
        if (smallestIndex !== startIndex) {
            this.swap(startIndex, smallestIndex);
            this.heapifyDown(smallestIndex); // Recursively heapify down.
        }
    }

    /**
     * Restores the heap property by moving a node upwards as needed.
     */
    private heapifyUp(startIndex) {
        let childIndex = startIndex;
        let parentIndex = Math.floor((childIndex - 1) / 2);

        // Continue swapping while the heap property is violated.
        while (this.shouldSwap(childIndex, parentIndex)) {
            this.swap(childIndex, parentIndex);
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
    }

    /**
     * Removes and returns the minimum element from the heap.
     */
    pop() {
        // Heap is empty.
        if (this.nodes.length === 0) {
            return null;
        }
        // Only one node in the heap.
        if (this.nodes.length === 1) {
            return this.nodes.pop();
        }

        const minNode = this.nodes[0];
        this.nodes[0] = this.nodes.pop(); // Replace the root with the last element.
        this.heapifyDown(0); // Restore the heap property by moving the root down.

        return minNode;
    }

    /**
     * Inserts a new element into the heap.
     */
    insert(node) {
        this.nodes.push(node);
        this.heapifyUp(this.nodes.length - 1); // Restore the heap property by moving the new element up.
    }
}
```
