// O(1) << O(log n) << O(n) << O(nlogn) << O(n^2) << O(n^3) << O(2^n) << O(n!) << O(n^k) << O(b^n).

function example1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
/* Time Complexity: O(n)
Explanation: The algorithm iterates through the array once, performing a constant amount of work (addition) for each element in the array. 
The time complexity is linear, proportional to the input size "n." */

function example2(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      result += arr[i] * arr[j];
    }
  }
  return result;
}
/* Time Complexity: O(n^2)
Explanation: The algorithm uses nested loops, causing it to iterate through the array for each element in the array. 
As a result, the time complexity is quadratic, proportional to the square of the input size "n". */

function example3(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
/* Time Complexity: O(n)
Explanation: The algorithm iterates through the array once to find the maximum element. 
It performs a constant amount of work (comparison) for each element in the array. 
The time complexity is linear, proportional to the input size "n." */

function example4(n) {
  if (n <= 1) {
    return n;
  }
  return example4(n - 1) + example4(n - 2);
}
/* Time Complexity: O(2^n)
Explanation: This is a recursive algorithm for calculating Fibonacci numbers. 
It has exponential time complexity because it makes two recursive calls for each input "n". 
The time complexity grows exponentially with "n". */

function example5(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}
/* Time Complexity: O(m * n) 
where "m" is the number of rows and "n" is the number of columns in the matrix.
Explanation: The algorithm iterates through all elements in the matrix once. 
The time complexity is proportional to the product of the number of rows and the number of columns. */

function example6(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
  }
  return count;
}
/* Time Complexity: O(n^2)
Explanation: The algorithm uses nested loops to compare all pairs of elements in the array. 
The time complexity is quadratic, proportional to the square of the input size "n." */

function example7(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
/* Time Complexity: O(n)
Explanation: The algorithm iterates through the numbers from 1 to "n" once, 
performing a constant amount of work (addition) for each number. 
The time complexity is linear, proportional to "n." */

function example8(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
/* Time Complexity: O(n)
Explanation: The algorithm iterates through the array once, 
performing a constant amount of work(multiplication) for each element in the array. 
The time complexity is linear, proportional to the input size "n." */

function example9(arr) {
  let result = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n; j *= 2) {
      result += arr[i];
    }
  }
  return result;
}
/* Time Complexity: O(n * log n)
Explanation: The algorithm uses nested loops. 
The outer loop iterates through the array once, 
and the inner loop iterates in a way that halves its size in each iteration. 
This results in a time complexity of "n * log n". */

function example10(matrix) {
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        total += matrix[i][j];
      }
    }
  }
  return total;
}
/* Time Complexity: O(m * n) 
where "m" is the number of rows and "n" is the number of columns in the matrix.
Explanation: The algorithm iterates through all elements in the matrix once. 
The time complexity is proportional to the product of the number of rows and the number of columns. */

function example11(arr) {
  let uniqueValues = {};
  for (let i = 0; i < arr.length; i++) {
    uniqueValues[arr[i]] = true;
  }
  return Object.keys(uniqueValues);
}
/* Time Complexity: O(n)
Explanation: The algorithm iterates through the array once, adding each element as a key to an object. 
The time complexity is linear, proportional to the input size "n." */

function example12(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i];
  }
  return sum;
}
/* Time Complexity: O(n/2) or O(n)
Explanation: The algorithm iterates through every second element in the array once. 
Although it's skipping some elements, the time complexity is still linear, proportional to half of the input size "n." */

function example13(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        result++;
      }
    }
  }
  return result;
}
/* Time Complexity: O(n^2)
Explanation: The algorithm uses nested loops to compare all pairs of elements in the array. 
It has quadratic time complexity, proportional to the square of the input size "n." */

function example14(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  example14(n - 1);
}
/* Time Complexity: O(n)
Explanation: This is a recursive function that decrements "n" by 1 in each recursive call until it reaches 0. 
It has linear time complexity, as it makes one recursive call for each value from "n" down to 1. */

function example15(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}
/* Time Complexity: O(n)
Explanation: The algorithm iterates through the array once, finding both the maximum and minimum values. 
It performs a constant amount of work (comparisons) for each element in the array. 
The time complexity is linear, proportional to the input size "n." */

function example16(arr) {
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
  return -1;
}
/* Time Complexity: O(log n)
Explanation: This is a binary search algorithm, 
which divides the search space in half with each comparison. 
As a result, the time complexity is logarithmic with respect to the size of the input array. */

function example17(arr) {
  arr.sort(); // Assume sorting takes O(n * log n) time.
  return arr;
}
/* Time Complexity: O(n * log n)
Explanation: Sorting an array using a typical comparison-based sorting algorithm, 
such as QuickSort or MergeSort, has a time complexity of O(n * log n). 
The sorting operation dominates the time complexity. */

function example18(arr) {
  let result = 0;
  for (let i = 1; i < arr.length; i *= 2) {
    result += arr[i];
  }
  return result;
}
/* Time Complexity: O(log n)
Explanation: The algorithm iterates through the array with a step size that doubles with each iteration. This is a characteristic of logarithmic time complexity.*/

function example19(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j *= 2) {
      product *= arr[j];
    }
  }
  return product;
}
/* Time Complexity: O(n * log n)
Explanation: The algorithm uses a nested loop where the inner loop has a step size that doubles with each iteration. 
This results in a time complexity of O(n * log n). */

function example20(matrix) {
  let total = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] > 0) {
        total += matrix[i][j];
      }
    }
  }
  return total;
}
/* Time Complexity: O(m * n) 
where "m" is the number of rows and "n" is the number of columns in the matrix.
Explanation: The algorithm iterates through all elements in the matrix once. 
The time complexity is proportional to the product of the number of rows and the number of columns. */

function example21(arr) {
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
  return -1;
}
/* Time Complexity: O(log n)
Explanation: This is the same binary search algorithm as in Answer 16, 
which has a time complexity of O(log n). */

function example22(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j *= 2) {
      result += arr[i];
    }
  }
  return result;
}
/* Time Complexity: O(n)
Explanation: Although there is a nested loop, 
the inner loop's step size is zero because "j" starts at 0 and doesn't change. 
As a result, the inner loop effectively doesn't execute, and the overall time complexity is linear, 
proportional to the input size "n." */

function example23(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr.length; j *= 2) {
      result += arr[i];
    }
  }
  return result;
}
/* Time Complexity: O(n * log n)
Explanation: The algorithm uses a nested loop where the inner loop has a step size that doubles with each iteration. 
This results in a time complexity of O(n * log n) */

function example24(matrix) {
  let total = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j *= 2) {
      total += matrix[i][j];
    }
  }
  return total;
}
/* Time Complexity: O(m * log n) 
where "m" is the number of rows and "n" is the number of columns in the matrix.
Explanation: The algorithm iterates through the matrix with a step size that doubles with each iteration, 
resulting in a time complexity of O(m * log n). */

function example25(arr) {
  arr.sort(); // Assume sorting takes O(n * log n) time.
  return arr;
}
/* Time Complexity: O(n * log n)
Explanation: This function sorts the input array using a typical comparison-based sorting algorithm, 
which has a time complexity of O(n * log n). 
The sorting operation dominates the time complexity. */

// GEEKS FOR GEEKS
