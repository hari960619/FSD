// Certainly! Here are simple JavaScript examples for each of the first 8 types of time complexity:

// 1. **Constant Time (O(1))**:
function constantExample(arr) {
  return arr[0];
}
//  Regardless of the size of the `arr`, this function always takes a constant amount of time to return the first element.

// 2. **Logarithmic Time (O(log n))**:
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Not found
}
// Binary search is a classic example of logarithmic time complexity. It efficiently finds an element in a sorted array.

// 3. **Linear Time (O(n))**:
function linearExample(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// The `linearExample` function calculates the sum of all elements in an array by iterating through it once.

// 4. **Linearithmic Time (O(n log n))**:
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
// Merge sort is an example of a sorting algorithm with linearithmic time complexity.

// 5. **Quadratic Time (O(n^2))**:
function quadraticExample(arr) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}
// The `quadraticExample` function generates all possible pairs of elements in an array.

// 6. **Cubic Time (O(n^3))**:
function cubicExample(arr) {
  let triplets = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        triplets.push([arr[i], arr[j], arr[k]]);
      }
    }
  }
  return triplets;
}
// The `cubicExample` function generates all possible triplets of elements in an array.

// 7. **Exponential Time (O(2^n))**:
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// The `fibonacci` function calculates the nth Fibonacci number using a recursive approach, which has exponential time complexity.

// 8. **Factorial Time (O(n!))**:
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// The `factorial` function calculates the factorial of a number using a recursive approach, which has factorial time complexity.
