let arr = [1, 2, 3, 4];

// Case 1
function getSum1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// Time Taken: c1n + c2 => n.(Order of Growth: linear)

// Case 2
function getSum2(arr) {
  if (arr.length % 2 === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
/* 
Here there are 3 cases 
 1) Best: if the input is even, the result is constant. This case is avoided the most compared to average case. 
 2) Average: for Average we need find know all the inputs including the edge cases. 
            In general we do not worry much about the average cases.
 3) Worst: Here is the maximum time taken and the value is n. 

    We wont get multiple cases in all programs.
    In cases of finding largest element in the array.
    It will be linear since we loop through the entire element.
*/
