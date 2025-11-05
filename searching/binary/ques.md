Part 1: Linear Search (Basic to Intermediate)
🟢 Basic Level

Write a function to search for a target element in an array using linear search and return its index, or -1 if not found.
Example: arr = [2, 5, 8, 1, 9], target = 8 → output: 2

Modify the above function to return all indices where the target element occurs.
Example: arr = [1, 2, 3, 2, 4, 2], target = 2 → output: [1, 3, 5]

Write a function that returns the first and last occurrence index of a target in the array.
Example: arr = [5, 3, 7, 3, 9], target = 3 → output: [1, 3]

🟡 Intermediate Level

Given an array of objects like

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Ravi" },
  { id: 3, name: "Amit" },
];


Write a linear search function to return all users with the name "Amit".

Write a function to find the maximum number in an array using linear search logic.

Given an array of strings, search for a string containing a specific substring (e.g., “car”).
Example: ["apple", "carrot", "banana", "car"] → "carrot" & "car"

Implement a recursive linear search (without using loops).

🔍 Part 2: Binary Search (Concept Builder)
🟢 Basic Level

Implement binary search on a sorted array (ascending order).
Example: arr = [1, 3, 5, 7, 9], target = 7 → output: 3

Modify the above function for a descending sorted array.

Implement binary search recursively.

🟡 Intermediate Level

Find the first occurrence of a target in a sorted array (with duplicates).
Example: arr = [1, 2, 2, 2, 3], target = 2 → output: 1

Find the last occurrence of a target in a sorted array.
Example: arr = [1, 2, 2, 2, 3], target = 2 → output: 3

Find the count of a target in a sorted array using binary search only.
(Use the first and last occurrence trick.)

Given a rotated sorted array, find a target using modified binary search.
Example: arr = [6, 7, 9, 15, 19, 2, 3], target = 15 → output: 3

Find the minimum element in a rotated sorted array.

🔴 Advanced / Conceptual Questions

Search an element in a 2D matrix that is sorted both row-wise and column-wise.
Example:

[
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 16]
]


Input: target = 8 → output: true

Find the peak element (greater than both neighbors) using binary search.
Example: arr = [1, 2, 3, 1] → output: 2 (element 3)

Find the index of the smallest element (pivot) in a rotated sorted array.
Example: arr = [4,5,6,7,0,1,2] → output: 4

Given an infinite sorted array (you can’t use .length), find the position of a target efficiently.
(Simulate expanding window technique before binary search.)

You have a sorted array of unknown size (like stream data). Implement a function to find if target exists — without knowing the array length.