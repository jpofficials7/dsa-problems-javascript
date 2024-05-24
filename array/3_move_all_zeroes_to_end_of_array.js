// Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).

// Approach: 1
// Traverse the given array ‘arr’ from left to right. While traversing, maintain count of non-zero elements in array. Let the count be ‘count’. For every non-zero element arr[i], put the element at ‘arr[count]’ and increment ‘count’. After complete traversal, all non-zero elements have already been shifted to front end and ‘count’ is set as index of first 0. Now all we need to do is run a loop that makes all elements zero from ‘count’ till end of the array.

// A JavaScript program to move all zeroes at the end of array

// Function which pushes all zeros to end of an array.
function pushZerosToEnd(arr, n) {
  let count = 0; // Count of non-zero elements
  // Traverse the array. If element ecountered in non zero, then replace the element at index 'count' with this element
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i]; // here count is incremented
    }
  }
  // Now all non-zero elements have been shifted to front and 'count' is set as index of first 0. Make all elements 0 from count to end.
  while (count < n) {
    arr[count++] = 0;
  }
}

// Driver code
// let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
// let n = arr.length;
// pushZerosToEnd(arr, n);
// console.log('Array after pusing all zeros to end of array:');
// for (let i = 0; i < n; i++) {
//   console.log(arr[i] + ' ');
// }

// Approach: 2
// Partitioning the array
// Approach: The approach is pretty simple. We will use 0 as a pivot element and whenever we see a non zero element we will swap it will the pivot element. So all the non zero element will come at the beginning.

// Javascript Program to move all zeros to the end
let A = [5, 6, 0, 4, 6, 0, 9, 0, 8];
let n = A.length;
let j = 0;
for (let i = 0; i < n; i++) {
  if (A[i] != 0) {
    // Swap - A[j] , A[i]
    swap(A, j, i); // Partitioning the array
    j++;
  }
}

for (let i = 0; i < n; i++) {
  console.log(A[i] + ' ');
}

function swap(A, a, b) {
  let temp = A[a];
  A[a] = A[b];
  A[b] = temp;
}

// Approach: 3
// In this approach, we will traverse the whole array and will count the number of zeros present in the array. While counting we will delete the zero from the array. After completing this process, we will push back the count number of zeros into the array.

// Javascript program to shift all zeros
// to right most side of array
// without affecting order of non-zero
// elements.

// function to shift zeros
function move_zeros_to_right(m) {
  let count = 0;
  for (let i = 0; i < m.length; i++) {
    if (m[i] == 0) {
      count++;
      // deleting the element from vector
      m.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < count; i++) {
    m.push(0);
  }
  console.log('array after shifting zeros to right side:');
  let str = m.join(' ');
  console.log(str);
}

// Driver code
let m = [5, 6, 0, 4, 6, 0, 9, 0, 8];

// function call
move_zeros_to_right(m);
