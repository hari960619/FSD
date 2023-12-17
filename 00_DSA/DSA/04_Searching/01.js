// Linear Search using "for" loop.
/* let arr = [10, 20, 30, 40, 50];
function linearSearch(arr, num) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      index = i;
    }
  }
  return index;
}
console.log(linearSearch(arr, 10));
console.log(linearSearch(arr, 50));
console.log(linearSearch(arr, 100)); */

// Linear Search using "recursion".
/* let arr2 = [10, 20, 30, 40, 50];
function linearSearchUsingRecursion(arr, i = 0, num) {
  if (i >= arr.length) return -1;
  if (arr[i] === num) return i;
  return linearSearchUsingRecursion(arr, i + 1, num);
}
console.log(linearSearchUsingRecursion(arr2, 0, 10));
console.log(linearSearchUsingRecursion(arr2, 0, 50));
console.log(linearSearchUsingRecursion(arr2, 0, 100)); */

// Binary search Using "for" loop.
// a) Ascending order Binary Search.
/* let arr3 = [10, 20, 30, 40, 50];
function binarySearchAscending(arr, num) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) return mid;
    else if (num > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearchAscending(arr3, 10));
console.log(binarySearchAscending(arr3, 40));
console.log(binarySearchAscending(arr3, 100));
// Different Test Cases
console.log(binarySearchAscending([], 100));
console.log(binarySearchAscending([999], 99));
console.log(binarySearchAscending([99], 99));
console.log(binarySearchAscending([99, 99], 99));
console.log(binarySearchAscending([99, 99, 99], 99)); */

// b) Descending order Binary Search.
/* let arr4 = [100, 70, 50, 40, 10];
function binarySearchDescending(arr, num) {
  let low = arr.length - 1,
    high = 0;
  while (low >= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) return mid;
    else if (num < arr[mid]) high = mid + 1;
    else low = mid - 1;
  }
  return -1;
}
console.log(binarySearchDescending(arr4, 70));
console.log(binarySearchDescending(arr4, 10));
console.log(binarySearchDescending(arr4, 500));
// Different Test Cases
console.log(binarySearchDescending([], 100));
console.log(binarySearchDescending([999], 99));
console.log(binarySearchDescending([99], 99));
console.log(binarySearchDescending([99, 99], 99));
console.log(binarySearchDescending([99, 99, 99], 99)); */

// Binary search Using "recursion".
// a) Ascending order Binary Search.
/* let arr5 = [10, 20, 30, 40, 50];
function binarySearchAscendingUsingRecursion(arr, num, low, high) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === num) return mid;
  if (num > arr[mid])
    return binarySearchAscendingUsingRecursion(arr, num, mid + 1, high);
  else return binarySearchAscendingUsingRecursion(arr, num, low, mid - 1);
}
console.log(binarySearchAscendingUsingRecursion(arr5, 10, 0, arr5.length - 1));
console.log(binarySearchAscendingUsingRecursion(arr5, 40, 0, arr5.length - 1));
console.log(binarySearchAscendingUsingRecursion(arr5, 100, 0, arr5.length - 1));
// Different Test Cases
console.log(binarySearchAscendingUsingRecursion([], 100, 0, 0));
console.log(binarySearchAscendingUsingRecursion([999], 99, 0, 0));
console.log(binarySearchAscendingUsingRecursion([99], 99, 0, 0));
console.log(binarySearchAscendingUsingRecursion([99, 99], 99, 0, 1));
console.log(binarySearchAscendingUsingRecursion([99, 99, 99], 99, 0, 2)); */

// b) Descending order Binary Search.
/* let arr6 = [100, 70, 50, 40, 10];
function binarySearchDescUsingRecursion(arr, num, low, high) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === num) return mid;
  else if (num > arr[mid]) {
    return binarySearchDescUsingRecursion(arr, num, low, mid - 1);
  } else return binarySearchDescUsingRecursion(arr, num, mid + 1, high);
}
// console.log(binarySearchDescUsingRecursion(arr6, 70, 0, arr6.length - 1));
// console.log(binarySearchDescUsingRecursion(arr6, 40, 0, arr6.length - 1));
// console.log(binarySearchDescUsingRecursion(arr6, 800, 0, arr6.length - 1));
// Different Test Cases
console.log(binarySearchDescUsingRecursion([], 100, 0, 0));
console.log(binarySearchDescUsingRecursion([999], 99, 0, 0));
console.log(binarySearchDescUsingRecursion([99], 99, 0, 0));
console.log(binarySearchDescUsingRecursion([99, 99], 99, 0, 1));
console.log(binarySearchDescUsingRecursion([99, 99, 99], 99, 0, 2)); */

// First Occurrence of a num.
// a) Using "for" loop.
/* let arr7 = [1, 10, 10, 15, 20, 20, 25];
function forLoopOnFirstOcc(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) {
      if (arr[mid - 1] !== num) return mid;
      else high = mid - 1;
    } else if (num > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
console.log(forLoopOnFirstOcc(arr7, 15));
console.log(forLoopOnFirstOcc(arr7, 20));
console.log(forLoopOnFirstOcc(arr7, 10));
console.log(forLoopOnFirstOcc(arr7, 100));

console.log(forLoopOnFirstOcc([1, 10, 10, 15, 20, 20, 25], 15));
console.log(forLoopOnFirstOcc([1, 10, 10, 15, 20, 20, 25], 20));
console.log(forLoopOnFirstOcc([1, 10, 10, 15, 20, 20, 25], 10));
console.log(forLoopOnFirstOcc([1, 10, 10, 15, 20, 20, 25], 100));

// Other Test Cases
console.log(forLoopOnFirstOcc([], 50));
console.log(forLoopOnFirstOcc([50], 50));
console.log(forLoopOnFirstOcc([50, 50], 50));
console.log(forLoopOnFirstOcc([50, 50, 50], 50)); */

// b) Using "recursion".
/* let arr8 = [1, 10, 10, 15, 20, 20, 25];
function firstOccWithRecursion(arr, num, low, high) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === num) {
    if (arr[mid - 1] !== num) return mid;
    else return firstOccWithRecursion(arr, num, low, mid - 1);
  } else if (num > arr[mid]) {
    return firstOccWithRecursion(arr, num, mid + 1, high);
  } else {
    return firstOccWithRecursion(arr, num, low, mid - 1);
  }
}
console.log(firstOccWithRecursion(arr8, 15, 0, arr8.length - 1));
console.log(firstOccWithRecursion(arr8, 20, 0, arr8.length - 1));
console.log(firstOccWithRecursion(arr8, 10, 0, arr8.length - 1));
console.log(firstOccWithRecursion(arr8, 100, 0, arr8.length - 1));

console.log(firstOccWithRecursion([1, 10, 10, 15, 20, 20, 25], 15, 0, 6));
console.log(firstOccWithRecursion([1, 10, 10, 15, 20, 20, 25], 20, 0, 6));
console.log(firstOccWithRecursion([1, 10, 10, 15, 20, 20, 25], 10, 0, 6));
console.log(firstOccWithRecursion([1, 10, 10, 15, 20, 20, 25], 100, 0, 6));

// // Other Test Cases
console.log(firstOccWithRecursion([], 50, 0, 0));
console.log(firstOccWithRecursion([50], 50, 0, 0));
console.log(firstOccWithRecursion([50, 50], 50, 0, 1));
console.log(firstOccWithRecursion([50, 50, 50], 50, 0, 2)); */

// Last Occurrence of a num.
// a) Using "for" loop.
/*let arr9 = [1, 10, 10, 15, 20, 20, 25];
 function lastOccUsingFor(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) {
      if (arr[mid + 1] != num) return mid;
      else low = mid + 1;
    } else if (num > arr[mid]) {
      low = mid + 1;
    } else high = mid - 1;
  }
  return -1;
}
console.log(lastOccUsingFor(arr9, 10));
console.log(lastOccUsingFor(arr9, 20));
console.log(lastOccUsingFor(arr9, 30));

console.log(lastOccUsingFor([1, 10, 10, 15, 20, 20, 25], 15, 0, 6));
console.log(lastOccUsingFor([1, 10, 10, 15, 20, 20, 25], 20, 0, 6));
console.log(lastOccUsingFor([1, 10, 10, 15, 20, 20, 25], 10, 0, 6));
console.log(lastOccUsingFor([1, 10, 10, 15, 20, 20, 25], 100, 0, 6));
// Other Test Cases
console.log(lastOccUsingFor([], 50, 0, 0));
console.log(lastOccUsingFor([50], 50, 0, 0));
console.log(lastOccUsingFor([50, 50], 50, 0, 1));
console.log(lastOccUsingFor([50, 50, 50], 50, 0, 2)); */
// b) Using "recursion".
/* let arr10 = [1, 10, 10, 15, 20, 20, 25];
function lastOccUsingRecursion(arr, num, low, high) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === num) {
    if (arr[mid + 1] !== num) return mid;
    else return lastOccUsingRecursion(arr, num, mid + 1, high);
  } else if (num > arr[mid]) {
    return lastOccUsingRecursion(arr, num, mid + 1, high);
  } else return lastOccUsingRecursion(arr, num, low, mid - 1);
}
console.log(lastOccUsingRecursion(arr10, 10, 0, 6));
console.log(lastOccUsingRecursion(arr10, 20, 0, 6));
console.log(lastOccUsingRecursion(arr10, 30, 0, 6));

console.log(lastOccUsingRecursion([1, 10, 10, 15, 20, 20, 25], 15, 0, 6));
console.log(lastOccUsingRecursion([1, 10, 10, 15, 20, 20, 25], 20, 0, 6));
console.log(lastOccUsingRecursion([1, 10, 10, 15, 20, 20, 25], 10, 0, 6));
console.log(lastOccUsingRecursion([1, 10, 10, 15, 20, 20, 25], 100, 0, 6));
// Other Test Cases
console.log(lastOccUsingRecursion([], 50, 0, 0));
console.log(lastOccUsingRecursion([50], 50, 0, 0));
console.log(lastOccUsingRecursion([50, 50], 50, 0, 1));
console.log(lastOccUsingRecursion([50, 50, 50], 50, 0, 2)); */

// Occurrence count of a num.
// a) Using "for" loop.
/* function occurrenceCountForLoop(arr, num) {
  let array = arr;
  let number = num;
  // First Occurrence
  function firstOcc(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === num) {
        if (arr[mid - 1] !== num) return mid;
        else high = mid - 1;
      } else if (num > arr[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }
  let startIndex = firstOcc(array, number);
  if (startIndex === -1) {
    return 0;
  }
  // Last Occurrence
  function lastOcc(arr, num) {
    let low = 0;
    let high = arr.length;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === num) {
        if (arr[mid + 1] !== num) return mid;
        else low = mid + 1;
      } else if (num > arr[mid]) low = mid + 1;
      else high = mid - 1;
    }
  }
  let endIndex = lastOcc(array, num);
  return endIndex - startIndex + 1;
}
console.log(occurrenceCountForLoop([10, 20, 20, 20, 30, 40], 20));
console.log(occurrenceCountForLoop([10, 20, 20, 20, 30, 40], 100));

console.log(occurrenceCountForLoop([1, 10, 10, 15, 20, 20, 25], 10, 0, 6));
console.log(occurrenceCountForLoop([1, 10, 10, 15, 20, 20, 25], 20, 0, 6));
console.log(occurrenceCountForLoop([1, 10, 10, 15, 20, 20, 25], 15, 0, 6));
console.log(occurrenceCountForLoop([1, 10, 10, 15, 20, 20, 25], 100, 0, 6));
// Other Test Cases
console.log(occurrenceCountForLoop([], 50, 0, 0));
console.log(occurrenceCountForLoop([50], 50, 0, 0));
console.log(occurrenceCountForLoop([50, 50], 50, 0, 1));
console.log(occurrenceCountForLoop([50, 50, 50], 50, 0, 2)); */

// b) Using "recursion".
/* function occurrenceCountRecursion(arr, num) {
  let array = arr,
    number = num;

  function startIndex(arr, num, low, high) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) {
      if (arr[mid - 1] !== num) return mid;
      else return startIndex(arr, num, low, mid - 1);
    } else if (num > arr[mid]) {
      return startIndex(arr, num, mid + 1, high);
    } else return startIndex(arr, num, low, mid - 1);
  }

  let start = startIndex(array, number, 0, array.length - 1);
  if (start === -1) return 0;

  function endIndex(arr, num, low, high) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) {
      if (arr[mid + 1] !== num) return mid;
      else return endIndex(arr, num, mid + 1, high);
    } else if (num > arr[mid]) {
      return endIndex(arr, num, mid + 1, high);
    } else return endIndex(arr, num, low, mid - 1);
  }
  debugger;
  let end = endIndex(array, number, 0, array.length - 1);
  return end - start + 1;
}
console.log(occurrenceCountRecursion([10, 20, 20, 20, 30, 40], 20));
console.log(occurrenceCountRecursion([10, 20, 20, 20, 30, 40], 100));

console.log(occurrenceCountRecursion([1, 10, 10, 15, 20, 20, 25], 10, 0, 6));
console.log(occurrenceCountRecursion([1, 10, 10, 15, 20, 20, 25], 20, 0, 6));
console.log(occurrenceCountRecursion([1, 10, 10, 15, 20, 20, 25], 15, 0, 6));
console.log(occurrenceCountRecursion([1, 10, 10, 15, 20, 20, 25], 100, 0, 6));
// Other Test Cases
console.log(occurrenceCountRecursion([], 50, 0, 0));
console.log(occurrenceCountRecursion([50], 50, 0, 0));
console.log(occurrenceCountRecursion([50, 50], 50, 0, 1));
console.log(occurrenceCountRecursion([50, 50, 50], 50, 0, 2)); */

// Square root of a number. If the number is not a perfect square, find the floor value.
// a) Using "for" loop without Binary Search.
/* function forLoopSquareRoot(number) {
  let value = 1;
  for (let i = 1; i * i <= number; i++) {
    value = i;
  }
  return value;
}
console.log(forLoopSquareRoot(4));
console.log(forLoopSquareRoot(14));
console.log(forLoopSquareRoot(25)); */

// b) Using "for" loop with Binary Search.
/* function binaryForLoopSquareRoot(number) {
  let low = 1,
    high = number,
    result = 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid === number) {
      // This result prints when it is a perfect square.
      return mid;
    } else if (mid * mid > number) {
      high = mid - 1;
    } else {
      result = mid;
      low = mid + 1;
    }
  }
  // This result prints when it is "NOT" a perfect square.
  return result;
}
console.log(binaryForLoopSquareRoot(4));
console.log(binaryForLoopSquareRoot(14));
console.log(binaryForLoopSquareRoot(25)); */

// c) Using "recursion".
/* function binaryRecursionSquareRoot(number, result, low, high) {
  let mid = Math.floor((low + high) / 2);
  if (mid * mid === number) {
    return mid;
  } else if (mid * mid < number) {
    if (low >= high) return result;
    return binaryRecursionSquareRoot(number, (result = mid), mid + 1, high);
  } else return binaryRecursionSquareRoot(number, result, low, mid - 1);
}

console.log(binaryRecursionSquareRoot(4, 1, 1, 4));
console.log(binaryRecursionSquareRoot(25, 1, 1, 25));
console.log(binaryRecursionSquareRoot(14, 1, 1, 14));
console.log(binaryRecursionSquareRoot(90, 1, 1, 90));
console.log(binaryRecursionSquareRoot(101, 1, 1, 101)); */

// GEEKS FOR GEEKS

// Given an integer array and another integer element.
// The task is to find if the given element is present in array or not.
/* function search(arr, N, X) {
  for (let i = 0; i < N; i++) {
    if (arr[i] === X) return i;
  }
  return -1;
}
console.log(search([1, 2, 3, 4, 5], 5, 5));
console.log(search([1, 2, 3, 4], 4, 3)); */

// Given an array arr[] sorted in ascending order of size N and an integer K.
// Check if K is present in the array or not.
// If present print 1 else print -1.
/* function searchInSorted(arr, N, K) {
  let low = 0;
  let high = N - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === K) return 1;
    else if (K > arr[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
console.log(searchInSorted([1, 2, 3, 4, 6], 5, 6));
console.log(searchInSorted([1, 2, 3, 4, 6], 5, 0)); */

// Given a sorted array of integers of size N and a number X.
// Find the leftmost index of X in the array arr[].
/* function leftIndex(N, arr, X) {
  let low = 0,
    high = N - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === X) {
      if (arr[mid - 1] !== X) return mid;
      else high = mid - 1;
    } else if (X > arr[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
console.log(leftIndex(10, [1, 1, 2, 2, 3, 4, 5, 5, 6, 7], 1));
console.log(leftIndex(5, [2, 2, 3, 3, 4], 4)); */

// Given a binary sorted non-increasing array of 1s and 0s.
// You need to print the count of 1s in the binary array.
function countOnes(arr, N) {}
