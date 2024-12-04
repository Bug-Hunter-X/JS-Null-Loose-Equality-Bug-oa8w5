# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript bug related to loose equality (`==`) when handling null values. The provided `foo` function aims to add two numbers, but incorrectly returns 0 if either input loosely equals null, even if it's a numeric zero or an empty string.  This is often a source of unexpected behavior and hard-to-debug errors.

The `bug.js` file contains the faulty code. The `bugSolution.js` file provides a corrected version utilizing strict equality (`===`) to correctly manage null and zero values.

## Reproducing the Bug

1. Clone this repository.
2. Open `bug.js`.
3. Execute the function with different input values (including 0, "", and null) to observe the unexpected behavior.

## Solution

The solution lies in using strict equality (`===`) instead of loose equality (`==`). Strict equality performs a type comparison alongside value comparison.  See `bugSolution.js` for the corrected version.