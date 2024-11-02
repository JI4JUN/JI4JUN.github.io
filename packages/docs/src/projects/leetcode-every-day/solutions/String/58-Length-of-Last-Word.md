---
publish: true
date: August 22, 2024 12:04 AM
title: 58 Length of Last Word
project: leetcode-every-day
tags:
 - Solutions
---

# 58 Length of Last Word

Created: August 22, 2024 12:04 AM<br>
Difficulty: Easy<br>
Topics: String<br>
Status: Done<br>

## 📖Description

[Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)

## 🤔Intuition

This problem mainly examines the application of `String` APIs.

## 📋Approach One

- Use `trimEnd()` method of `String` to remove whitespace from the end of the given string `s` , and let `trimmed` to the returned new string.
- Use `lastIndexOf()` method of `String` to search the `index` of the last occurrence of the substring which is not a whitespace .
- Then, calculate the length of this substring using `trimmed.length - 1 - index` .

## 📊Complexity

- **Time complexity:** $O(N)$
- **Space complexity:** $O(N)$

## 🧑🏻‍💻Code

```tsx
function lengthOfLastWord(s: string): number {
    const trimmed: string = s.trimEnd();

    return trimmed.length - 1 - trimmed.lastIndexOf(' ');
}
```

## 📋Approach Two

We can implement an one line approach if the LeetCode support ES2023.

> We will get an error message: Property 'findLast' does not exist on type 'string[]'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2023' or later.
>

## 📊Complexity

- **Time complexity:** $O(N)$
- **Space complexity:** $O(N)$

## 🧑🏻‍💻Code

```jsx
function lengthOfLastWord(s: string): number {
    return (s.split(' ').findLast((s: string) => s !== '') ?? '').length;
}
```

## 🔖Reference

None.
