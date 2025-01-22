# Uncommon Firebase Error: Accessing Nested Data Before Existence Check

This repository demonstrates an uncommon Firebase error related to data retrieval. The error occurs when accessing nested data within a document before checking if the data exists and is of the expected type. This can lead to unexpected application behavior and crashes.

The `bug.js` file contains code that replicates the error. The `bugSolution.js` file provides a corrected version that includes proper checks to prevent this issue.  Refer to the solution for best practices when handling nested data in Firebase.

## Solution
The solution involves explicitly checking for the existence of the nested data before accessing it.  This prevents runtime errors and makes your code more robust. 