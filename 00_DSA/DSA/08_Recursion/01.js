// 1) Print numbers from 5 to 1.
/* function printNumbersDescending(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  printNumbersDescending(n - 1);
}
printNumbersDescending(5); */

// 2) Print numbers from 1 to 5.
/* function printNumbersAscending(n) {
  if (n < 1) {
    return;
  }
  printNumbersAscending(n - 1);
  console.log(n);
}
printNumbersAscending(5); */

// 3) Print Both ways at once from 1 to 5.
/* function printNumbersBothWays(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  printNumbersBothWays(n - 1);
  console.log(n);
}
printNumbersBothWays(5); */

// 4) Factorial of a number
/* function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(120)); */

// 5) Sum of n digits
/* function sum(num) {
  if (num < 1) {
    return 0;
  }
  return num + sum(num - 1);
}
console.log(sum(5)); */

// 6) Sum of the numbers of the given digits.
/* function sumOfDigits(num) {
  if (num < 1) {
    return 0;
  }
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}
console.log(sumOfDigits(12345));
console.log(sumOfDigits(1342)); */

// 7) Sum of the numbers of the given digits.
/* function productOfDigits(num) {
  if (num < 1) {
    return 1;
  }
  return (num % 10) * productOfDigits(Math.floor(num / 10));
}
console.log(productOfDigits(12345));
console.log(productOfDigits(12045));
console.log(productOfDigits(1342)); */

// Passing Numbers to the function.
/* function passNumber(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  // passNumber(n--);
  passNumber(--n);
  // In the above situation the value gets passed and then decrement, which is not desired.
  // If we use post decrement it will lead to stack overflow.
  // Hence use pre decrement or n-1.
} */

// 8) Reverse the digits in the number.

//Solution A
/* function reverseNumberSolutionA(num, result = 0) {
  if (num % 10 === num) {
    // console.log("FinalA", result);
    result = result * 10 + num;
    // 2430 + 1;
    // console.log("FinalB", result);
    return result;
  }
  //   console.log("FR", result);
  result = result * 10 + (num % 10);
  //   console.log("SR", result);
  // 2
  // 20 + 4 = 24
  // 240 + 3 = 243
  let quotient = Math.floor(num / 10);
  // 134
  // 13
  // 1
  return reverseNumberSolutionA(quotient, result);
  // 2+ rN(134,2)
  // 24+ rN(13,24)
  // 243 + rN(1,243)
}
console.log(reverseNumberSolutionA(1342));
console.log(reverseNumberSolutionA(1001));
console.log(reverseNumberSolutionA(7177)); */

//Solution B
/* function reverseNumberSolutionB(num) {
  if (num % 10 === num) {
    return num;
  }
  let power = Math.floor(num / 10).toString().length;
  let value = (num % 10) * Math.pow(10, power);
  return value + reverseNumberSolutionB(Math.floor(num / 10));
}
console.log(reverseNumberSolutionB(1342));
console.log(reverseNumberSolutionB(1001));
console.log(reverseNumberSolutionB(7177)); */

// 9) Check for Palindrome
/* function palindrome(num) {
  let value = num;
  let reverseValue = function revNumber(value) {
    if (value % 10 === value) {
      // console.log(value);
      return value;
    }
    let powerValue = Math.floor(value / 10).toString().length;
    //   console.log(powerValue);
    let newNumber = Math.pow(10, powerValue) * (value % 10);
    //   console.log(value % 10);
    //   console.log(newNumber);
    return newNumber + revNumber(Math.floor(value / 10));
  };
  if (value === Number(reverseValue(value))) {
    return true;
  }
  return false;
}
console.log(palindrome(1221));
console.log(palindrome(1459)); */

// 10) Count the number of zeros in the number.
//Solution A
/* function countZerosSolutionA(num, count = 0) {
  if (num % 10 === num) {
    if (num === 0) {
      count += 1;
      return count;
    } else {
      return count;
    }
  }
  if (num % 10 === 0) count += 1;
  return countZerosSolutionA(Math.floor(num / 10), count);
}
console.log(countZerosSolutionA(30204));
console.log(countZerosSolutionA(30004));
console.log(countZerosSolutionA(10000)); */

//Solution B
/* function countZerosSolutionB(num, count = 0) {
  if (num === 0) {
    return count;
  }
  if (num % 10 === 0)
    return countZerosSolutionB(Math.floor(num / 10), count + 1);
  else return countZerosSolutionB(Math.floor(num / 10), count);
}
console.log(countZerosSolutionB(30204));
console.log(countZerosSolutionB(30004));
console.log(countZerosSolutionB(10000)); */

// 11) Given an integer "num" , return the number of steps to reduce it to zero.In one step, if the current number is even, you have to divide it by 2 , otherwise, you have to subtract 1 from it.
/* function numberOfSteps(num, count = 0) {
  if (num === 0) {
    return count;
  }
  if (num % 2 === 0) {
    return numberOfSteps(num / 2, count + 1);
  } else return numberOfSteps(num - 1, count + 1);
}
console.log(numberOfSteps(14));
console.log(numberOfSteps(8)); */

// 12) Find the Factorial of a num
/* function factorial(num) {
  if (num < 0) {
    return undefined;
  }
  if (num <= 1) {
    return num;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(10));
console.log(factorial(-5)); */

// 13) Calculate the fibonacci Number
/* function calculateFiboValue(num) {
  if (num < 2) {
    return num;
  }
  return calculateFiboValue(num - 1) + calculateFiboValue(num - 2);
}
console.log(calculateFiboValue(0));
console.log(calculateFiboValue(1));
console.log(calculateFiboValue(5));
console.log(calculateFiboValue(10));
console.log(calculateFiboValue(15)); */

// 14) Compute the sum of elements of an array of numbers.
/* function sumOfArrayElements(arr, sum = 0) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) {
    let value = arr.pop();
    sum += value;
    return sum;
  }
  let value = arr.pop();
  return sumOfArrayElements(arr, (sum += value));
}
console.log(sumOfArrayElements([1, 2, 3, 4, 5]));
console.log(sumOfArrayElements([10, -5, 20, 8, -2]));
console.log(sumOfArrayElements([0, 0, 0, 0, 0]));
console.log(sumOfArrayElements([100]));
console.log(sumOfArrayElements([-1, -2, -3, -4, -5]));
console.log(sumOfArrayElements([]));
console.log(sumOfArrayElements([1, 1, 1, 1, 1, 1, 1]));
console.log(sumOfArrayElements([2.5, 3.7, 1.2]));
console.log(sumOfArrayElements([10, 20, 30, 40, 50]));
console.log(sumOfArrayElements([-10, -20, -30, -40, -50])); */

// 15) Compute the sum of elements of an Nested array of numbers.
/* function sumOfNestedArrayElements(arr, sum = 0) {
  if (arr.length === 0) {
    return sum;
  }
  let value = arr.pop();
  if (Array.isArray(value)) {
    sum += sumOfNestedArrayElements(value);
  } else {
    sum += value;
  }
  return sumOfNestedArrayElements(arr, sum);
}
console.log(sumOfNestedArrayElements([1, [2, [3, 4], 5], 6]));
console.log(sumOfNestedArrayElements([[10, 20], [30, [40, 50]], 60]));
console.log(sumOfNestedArrayElements([1, [2, [3, [4, [5]]]]]));
console.log(sumOfNestedArrayElements([[-1, -2], [-3, [-4, -5]], -6]));
console.log(sumOfNestedArrayElements([0, [0, [0, [0, 0]]]]));
console.log(sumOfNestedArrayElements([])); */

// 16) Reverse a string
/* function reverseString(str, revStr = "") {
  if (str.length === 0) return revStr;
  let i = str.length - 1;
  revStr += str[i];
  let newStr = str.slice(0, i);
  return reverseString(newStr, revStr);
}
console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("12345"));
console.log(reverseString("racecar"));
console.log(reverseString("openai"));
console.log(reverseString(" ")); */

// 17) Write a recursive function to find the greatest common divisor (GCD) or highest common factor (HCF) of two numbers.
// In order understand the above we are solving it in iterative form first.
// Remember HCF or GCD of 0 and "n" is n.
// Remember HCF or GCD of 1 and "n" is 1.
/* function iterativeGCD(a, b) {
  let hcf = 1;
  if (a === 0 || b === 0) {
    return a + b;
  } else if (a === 1 || b === 1) {
    return 1;
  }
  if (a === b) {
    return a;
  }
  let barValue = a < b ? a : b;
  for (i = 1; i <= barValue; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}
console.log(iterativeGCD(48, 18));
// 6
console.log(iterativeGCD(8, 12));
// 4
console.log(iterativeGCD(25, 35));
// 5
console.log(iterativeGCD(18, 24));
// 6
console.log(iterativeGCD(7, 11));
// 1
console.log(iterativeGCD(36, 48));
// 12
console.log(iterativeGCD(17, 23));
// 1
console.log(iterativeGCD(0, 5));
// 5
console.log(iterativeGCD(50, 50));
// 50
console.log(iterativeGCD(15, 20));
// 5
console.log(iterativeGCD(105, 140));
// 35
console.log(iterativeGCD(72, 108));
// 36
console.log(iterativeGCD(37, 37));
// 37
console.log(iterativeGCD(1, 100));
// 1
console.log(iterativeGCD(0, 42));
// 42
console.log(iterativeGCD(1, 1));
// 1 */

/* function recursiveGCD(a, b, i = 1, hcf = 1) {
  if (a === 0 || b === 0) {
    return a + b;
  } else if (a === 1 || b === 1) {
    return 1;
  } else if (a === b) {
    return a;
  }
  debugger;
  if (a < b) {
    if (i > a) {
      return hcf;
    }
    while (i <= a) {
      if (a % i === 0 && b % i === 0) {
        hcf = i;
      }
      i++;
      return recursiveGCD(a, b, i, hcf);
    }
  } else {
    if (i > b) {
      return hcf;
    }
    while (i <= b) {
      if (a % i === 0 && b % i === 0) {
        hcf = i;
      }
      i++;
      return recursiveGCD(a, b, i, hcf);
    }
  }
}
console.log(recursiveGCD(48, 18));
// 6
console.log(recursiveGCD(8, 12));
// 4
console.log(recursiveGCD(25, 35));
// 5
console.log(recursiveGCD(18, 24));
// 6
console.log(recursiveGCD(7, 11));
// 1
console.log(recursiveGCD(36, 48));
// 12
console.log(recursiveGCD(17, 23));
// 1
console.log(recursiveGCD(0, 5));
// 5
console.log(recursiveGCD(50, 50));
// 50
console.log(recursiveGCD(15, 20));
// 5
console.log(recursiveGCD(105, 140));
// 35
console.log(recursiveGCD(72, 108));
// 36
console.log(recursiveGCD(37, 37));
// 37
console.log(recursiveGCD(1, 100));
// 1
console.log(recursiveGCD(0, 42));
// 42
console.log(recursiveGCD(1, 1));
// 1 */

// 18) Implement a recursive function to check if a given string is a palindrome.
/* function checkPalindrome(str) {
  let value = str;
  let revValue = strPalindrome(value);
  if (revValue === value) return true;
  else false;
}
function strPalindrome(str, revStr = "") {
  if (str.length === 0) return revStr;
  revStr += str[str.length - 1];
  let newStr = str.slice(0, str.length - 1);
  return strPalindrome(newStr, revStr);
}
console.log(checkPalindrome("12321")); */
