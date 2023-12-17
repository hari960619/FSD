// JS does not have No Character type.
// Typically stored using UTF - 16.

let s = "gfg";
// console.log(s[1]);
// console.log(s.charAt(1));
// console.log(s.length);
// console.log(s.charCodeAt(0));

let s2 = "geeksforgeeks";
// console.log(s2.slice(0));
// console.log(s2.slice(0, 4));

// Check Palindrome
/* function checkPalindrome(str) {
  let low = 0,
    high = str.length - 1;
  while (low <= high) {
    if (str[low] !== str[high]) {
      return false;
    }
    low++;
    high--;
  }
  return true;
}
console.log(checkPalindrome("ABCBA"));
console.log(checkPalindrome("ABCCBA"));
console.log(checkPalindrome("Harish"));
console.log(checkPalindrome(" ")); */
/* Yes, a single space character " " is considered a palindrome. 
A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, disregarding spaces, punctuation, and capitalization. 
Since a single space character remains the same when read backward, it qualifies as a palindrome. */
// console.log(checkPalindrome(""));
/* An empty string "" is also considered a palindrome. 
An empty string has no characters, so when you read it forward or backward, it remains the same (empty). 
Palindromes can be of any length, including zero characters, and an empty string meets the definition of a palindrome because it doesn't change when reversed. */

// Checking Subsequence in a String.
/* We have understand that the subsequence should match with the order of the original string.
Example 1: ABCD ==> AD ==> true
Example 2: ABCDE ==> AED ==> false
Example 3: ABC ==> "",A,B,C,AB,AC,BC,ABC ==> All these are the subsequence.
*/
// Iterative Solution
/* function subSequence(str1, str2) {
  let j = 0;
  for (let i = 0; i < str1.length && str2.length; i++) {
    if (str1[i] === str2[j]) j++;
  }
  return j === str2.length;
}
console.log(subSequence("ABEF", "AF"));
console.log(subSequence("ABEF", "")); //true
console.log(subSequence("ABEF", " ")); //false */
// Recursive solution.
/* function recursiveSubstring(str1, str2, m, n) {
  // m and n are the length.
  if (n === 0) return true;
  if (m === 0) return false;
  if (str1[m - 1] === str2[n - 1]) {
    return recursiveSubstring(str1, str2, m - 1, n - 1);
  }
  return recursiveSubstring(str1, str2, m - 1, n);
}
console.log(recursiveSubstring("ABEF", "AF", 4, 2));
console.log(recursiveSubstring("ABEF", " ", 4, 1)); */

// Check for Anagram
/* 
Example 1) str1 = "listen" and str2 = "silent" ==> true
Example 2) str1 = "abaac" and str2 = "aabcc" ==> false
*/
// Naive Solution
/* function Anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");
  return s1 === s2;
}
console.log(Anagram("listen", "silent"));
console.log(Anagram("abaac", "aabcc")); */

/* function Anagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let str1Count = 0,
    str2Count = 0;
  for (let i = 0; i < str1.length && i < str2.length; i++) {
    str1Count += str1.charCodeAt(i);
    str2Count += str2.charCodeAt(i);
  }
  console.log(str1Count, str2Count);
  return str1Count === str2Count;
}
console.log(Anagram2("listen", "silent"));
console.log(Anagram2("abaac", "aabcc")); */

// The Next Solution is based on the below working:
/* 
let arr = [0, 1, 2, 4];
arr[0]++;
arr[1]--;
console.log(arr);
*/
//ANOTHER ANAGRAM SOLUTION
/* function Anagram3(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let count = new Array(256).fill(0);
  for (let i = 0; i < str1.length; i++) {
    count[str1.charCodeAt(i)]++;
    count[str2.charCodeAt(i)]--;
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) return false;
  }
  return true;
}
console.log(Anagram3("listen", "silent"));
console.log(Anagram3("abaac", "aabcc")); */

// Leftmost Repeating Character, we do not give the repeating value, we look for the first repeating character.
/* Example 1: str = "geeksforgeeks" , value = g ==> Answer: 0
   Example 2: str = "abbcc" , value = b ==> Answer: 1
   Example 3: str = "abcd" , No Repetition ==> Answer: -1 */
// NAIVE APPROACH
/* function leftMostElement(str) {
  let j = 1;
  for (let i = 0; (i < str.length) & (j < str.length); i++) {
    // console.log(str[i], str[j]);
    if (str[i] === str[j]) return i;
    j++;
  }
  return -1;
}
console.log(leftMostElement("abcd"));
console.log(leftMostElement("geeksforgeeks"));
console.log(leftMostElement("abcc")); */

// BETTER SOLUTION
/* function leftMostElement2(str) {
  let count = new Array(256).fill(0);
  for (let i = 0; i < str.length; i++) {
    count[str.charCodeAt(i)]++;
  }
  for (let i = 0; i < str.length; i++) {
    if (count[str.charCodeAt(i)] > 1) return i;
  }
  return -1;
}
console.log(leftMostElement2("abccbd")); */

// EFFICIENT SOLUTION: This solution uses only one traversal.
/* function leftMostElement3(str) {
  let result = -1;
  let visited = new Array(256);
  for (i = str.length - 1; i >= 0; i--) {
    if (visited[str.charCodeAt(i)] === true) {
      result = i;
    }
    visited[str.charCodeAt(i)] = true;
  }
  return result;
}
console.log(leftMostElement3("abccbd"));
console.log(leftMostElement3("abcd"));
console.log(leftMostElement3("abcdee")); */

// Reverse words in the String
// NAIVE
/* function reverseString(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseString("welcome to gfg"));
console.log(reverseString("I love coding"));
console.log(reverseString("abc")); */
// LOOK FOR A BETTER SOLUTION LATER
