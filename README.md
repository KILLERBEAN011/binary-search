# Binary Search

Level 5 project by Olateju Yusuf Ajibola.

Binary search finds an item in a **sorted** list by checking the middle item
and throwing away the half that cannot contain the target.
Time complexity: O(log n).

## Files
- `binarySearch.js` – binary search in JavaScript (loop version), with test cases.

## How to run
1. Install Node.js from https://nodejs.org
2. Download or clone this repository.
3. Open a terminal in the project folder and run:

       node binarySearch.js

## Expected output

    7
    -1
    0
    8
    2

| Search for | Result | Meaning |
|---|---|---|
| 72 | 7 | found at index 7 |
| 50 | -1 | not in the list |
| 3 | 0 | first item |
| 89 | 8 | last item |
| 15 | 2 | found in the left half |