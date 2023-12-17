// *****
// *****
// *****
// *****
// *****

function pattern1(n) {
  for (i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= n; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern1(5);

// *
// **
// ***
// ****
// *****

function pattern2(n) {
  for (i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern2(5);

// *****
// ****
// ***
// **
// *

function pattern3(n) {
  for (i = 1; i <= n; i++) {
    let row = "";
    for (j = n; j >= i; j--) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern3(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern4(n) {
  for (i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}
// pattern4(5);

// *
// ***
// *****
// *******
// *********

function pattern5(n) {
  for (i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row += "*";
    }
    for (j = 1; j <= i - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern5(5);

// *********
// *******
// *****
// ***
// *

function pattern6(n) {
  for (i = n; i >= 1; i--) {
    let row = "";
    for (j = i; j >= 1; j--) {
      row += "*";
    }
    for (j = i - 1; j >= 1; j--) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern6(5);

// *
// * *
// * * *
// * * * *
// * * * * *

function pattern7(n) {
  for (i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern7(5);

// * * * * *
// * * * *
// * * *
// * *
// *

function pattern8(n) {
  for (i = n; i >= 1; i--) {
    let row = "";
    for (j = i; j >= 1; j--) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern8(5);

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function pattern9(n) {
  for (i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
  for (i = n - 1; i >= 1; i--) {
    let row = "";
    for (j = i; j >= 1; j--) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern9(5);

// * * * * *
// * * * *
// * * *
// * *
// *
// *
// * *
// * * *
// * * * *
// * * * * *

function pattern10(n) {
  for (i = n; i >= 1; i--) {
    let row = "";
    for (j = i; j >= 1; j--) {
      row += "* ";
    }
    console.log(row);
  }
  for (i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// pattern10(5);

//     *
//    * *
//   *   *
//  *     *
// *********

function pattern11(n) {
  for (i = n; i >= 1; i--) {
    let row = "";
    for (j = i - 1; j >= 1; j--) {
      row += "_";
    }
    for (j = 1; j <= n; j++) {
      for (k = 1; k <= i; k++) {
        if (j === 1 || j === n || k === 1 || k === 5) {
          row += "*";
        } else {
          row += "_";
        }
      }
    }
    console.log(row);
  }
}

pattern11(5);

// *********
//  *     *
//   *   *
//    * *
//     *

// *
// * *
// *   *
// *     *
// *       *
// *     *
// *   *
// * *
// *

//         1
//       1   1
//     1   2   1
//   1   3   3   1
// 1   4   6   4   1

//    1
//   212
//  32123
// 4321234
//  32123
//   212
//    1

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

// ****
// *  *
// *  *
// *  *
// ****

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

//     *      *
//   *   *  *   *
// *      *      *

// *        *
// **      **
// * *    * *
// *  *  *  *
// *   **   *
// *   **   *
// *  *  *  *
// * *    * *
// **      **
// *        *

// *****
// *   *
// *   *
// *   *
// *****

// 1 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3
// 4 4 4
// 5 5
// 6

// 1 2 3 4  17 18 19 20
//   5 6 7  14 15 16
//     8 9  12 13
//      10  11

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

//         1
//       2 1 2
//     3 2 1 2 3
//   4 3 2 1 2 3 4
// 5 4 3 2 1 2 3 4 5

// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

// E
// D E
// C D E
// B C D E
// A B C D E

// a
// B c
// D e F
// g H i J
// k L m N o

// E D C B A
// D C B A
// C B A
// B A
// A

// 1      1
// 12    21
// 123  321
// 12344321
