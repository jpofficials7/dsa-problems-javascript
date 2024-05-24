// Given an array with all distinct elements, find the largest three elements.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Approach:
//  Initialize three variables, `first`, `second`, and `third`, to store the three largest elements. We then iterate through the array and compare each element with the current values of `first`, `second`, and `third`. If an element is greater than `first`, we update `third` to `second`, `second` to `first`, and `first` to the new element. If an element is greater than `second` but not `first`, we update `third` to `second` and `second` to the new element. If an element is greater than `third` but not `second` or `first`, we update `third` to the new element. After iterating through the entire array, `first`, `second`, and `third` will contain the three largest elements, which we can then print as the result.

// Set first, second, and third to the minimum possible integer value (INT_MIN).
// Iterate through the Array
// For each element arr[i]:
// If arr[i] is greater than first:
// Update third to second, second to first, and first to arr[i].
// Otherwise, if arr[i] is greater than second and not equal to first:
// Update third to second and second to arr[i].
// Otherwise, if arr[i] is greater than third and not equal to second and first:
// Update third to arr[i].
// Print the values of first, second, and third as the three largest elements.

// Javascript program for find the largest
// three elements in an array

// Function to print three largest elements

function print3Largest(arr, arr_size) {
  let first, second, third;

  // There should be atleast three elements in the array
  if (arr_size < 3) {
    console.log('Array must be of size 3');
    return;
  }

  third = first = second = Number.MIN_VALUE;
  for (let i = 0; i < arr_size; i++) {
    // If the current element is greater than first
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    }
    // If arr[i] is in between first and second then update second
    else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) third = arr[i];
  }
  console.log('Three largest elements are ' + first + ' ' + second + ' ' + third);
}

let arr = [12, 13, 1, 10, 34, 1];
let n = arr.length;
print3Largest(arr, n);
