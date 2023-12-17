// Bubble sort : Stable Algorithm
/* Understanding: 
    Bubble sort pushes the largest element to the last. 
    This is important because the moment the large term / last term gets it positioned we will nto carry any operations on those.
 Now for example a 4 element array will have 3 passes.
    1) The first pass does 3 comparisons and pushes the largest element to the last. 
    2) The second pass does 2 comparisons and pushes the second largest element to last but one before place.
    3) The third pass does one comparison and pushes the 3 rd largest element to last but second position.
Notice all the passes increases the comparison decreases. So use "i" to keep a track in reducing the operations smoothly.
    */

/* function bubbleSort(arr) {
  let n = arr.length - 1;
  // Notice below we do not loop n times but n-1, this condition gives us the passes.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([10, 8, 20, 5])); */

// Optimizing the code even more.
// Here the TC will be still O(n^2) but we can avoid unnecessary operations.
// The best case in sorted array, the TC will be linear.

/* function bubbleSortOptimized(arr) {
  let n = arr.length - 1; // Passes
  for (let i = 0; i < n; i++) {
    let swapped = false;
    console.log(i);
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (swapped === false) return arr;
  }
  return arr;
}
console.log(bubbleSortOptimized([8, 7, 6, 5])); // Looped 3 Times
console.log(bubbleSortOptimized([8, 7, 26, 50])); // Looped 2 Times
console.log(bubbleSortOptimized([8, 17, 26, 50])); //  Looped 1 Times */

// The reason bubble sort is stable because while swapping the elements places are not changed until there is a difference, If no difference then their position remain the same.

// Selection Sort :
/* It does less memory rides compared other algos.However it not stable.
It is not stable since if the element is in its proper place, still they changed.
Find the index that is smaller and using the index swap the element.
Use j to get index and i to swap.
Selection sort is similar to Heap sort. */
/* function selectionSort(arr) {
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j <= n; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
    }
    [arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]];
  }
  return arr;
}
console.log(selectionSort([10, 5, 8, 20, 2])); */

// Insertion Sort
/* Most efficient sorting algo for small arrays. It is also stable.*/

/* function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (arr[j] > key && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([20, 5, 40, 60, 10]));
console.log(insertionSort([20, 15, 10, 5, 0])); */

// Merge sort
/* function mergeSort(arr, low, mid, high) {
  let left = [],
    right = [];
  for (let i = 0; i <= high; i++) {
    if (i <= mid) left.push(arr[i]);
    else right.push(arr[i]);
  }
  let i = 0,
    j = 0,
    k = low;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
  }
  return arr;
}
console.log(mergeSort([10, 20, 40, 20, 30], 0, 2, 4)); */

// Count inversions in Array in Javascript
/*  A pair (arr[i],arr[j]) forms an inversion when i<j and arr[i] > arr[j]. 
Example 1) : [2,4,1,3,5] 
             Number of inversion = 3 
             i.e., (2,1),(4,1),(4,3)
Example 2) : [1,2,3,4,5] 
             Number of inversion = 0 
Example 1) : [5,4,3,2,1] 
             Number of inversion = 4+3+2+1 = 10 
             i.e., (5,4),(5,3),(5,2),(5,1),(4,3),(4,2),(4,1),(3,2),(3,1),(2,1)
*/
// NAIVE SOLUTION
/* function countInversion(arr) {
  let n = arr.length - 1;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (j = i + 1; j <= n; j++) {
      if (arr[i] > arr[j]) count++;
    }
  }
  return count;
}
console.log(countInversion([2, 4, 1, 3, 5]));
console.log(countInversion([1, 2, 3, 4, 5]));
console.log(countInversion([5, 4, 3, 2, 1]));
console.log(countInversion([2, 5, 8, 11, 3, 6, 9, 13])); */

// EFFICIENT SOLUTION
// YET TO BE SOLVED

// Simple Set Example
/* let a = [10, 10, 20];
let s = new Set(a);
console.log(s.size); */

// Union of two unsorted arrays in JS
/* a = [10,10,20] b= [20,30,10] Answer = 3 */
/* function unionSize(arr1, arr2) {
  let s = new Set(arr1);
  for (i = 0; i < arr2.length; i++) {
    s.add(arr2[i]);
  }
  console.log(s);
  console.log(s.size);
}
unionSize([10, 10, 20], [10, 20, 30]); */

// Partition a given array (Naive Partition)
/* Input = [3,8,6,12,10,7] position = 5
Output = [3,6,7,8,12,10] || [6,3,7,8,12,10], 
the numbers before and after the position can be in any order.
*/

// Naive Solution:
/* function partition(arr, pos) {
  let n = arr.length;
  let value = arr[pos];
  [arr[pos], arr[n - 1]] = [arr[n - 1], arr[pos]];
  let temp = [];
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] <= value) temp.push(arr[i]);
  }
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] > value) temp.push(arr[i]);
  }
  arr = temp;
  return arr;
}
console.log(partition([5, 13, 6, 9, 12, 8, 11], 5)); */
// Lomuto Solution: It is for the upper partition solution.This method just needs one traversal of the array and requires constant Aux space.
/* function lomutoPartition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  console.log(arr);
}
console.log(lomutoPartition([10, 80, 30, 90, 70], 0, 4)); */

// Intersection of two sorted array, Print the elements that are common in both the arrays.
// Naive Solution
// a) Linear Search: Time Complexity = O(m*n)
/* function commonElements(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        if (arr1[i - 1] !== arr1[i] && arr2[j - 1] !== arr2[j])
          console.log(arr1[i]);
      }
    }
  }
}
commonElements([1, 20, 20, 40, 60], [2, 20, 20, 20]);
commonElements([1, 60, 40, 30], [30, 20, 20, 20, 40]); */

// b) We can do this using Binary search where TC will be O(mlogn);
// For the for every outside array element, in the inside array do a binary search.
// SHOULD BE SOLVED

// EFFICIENT SOLUTION : This solution works for sorted array only
/* function commonElements2(a, b) {
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    if (i > 0 && a[i - 1] === a[i]) i++;
    else if (a[i] < b[i]) i++;
    else if (a[i] > b[i]) j++;
    else {
      console.log(a[i]);
      i++;
      j++;
    }
  }
}
commonElements2([1, 20, 20, 40, 60], [2, 20, 20, 20]);
commonElements2([1, 30, 40, 60, 100], [10, 30, 20, 40]); */

// Hoare's Partition.
// This partition is better than Lomuto Partition.
// SHOULD LEARN

// Quick Sort:
/* Similar to Merge sort
Divide and Conquer Algo
Worst Case : O(n^2)
Despite O(n^2) worst case, it is considered faster because of the following reasons.
1) In - place Algo
2) Cache Friendly
3) Average Case is O(nlogn)
4) Tail Recursive
Partition is Key Function (Naive, Lomuto, Hoare's)

Many libraries use Quick sort when stability is not required.
*/
