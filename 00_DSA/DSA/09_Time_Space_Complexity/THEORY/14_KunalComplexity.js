// Time Complexity != Time Taken
// Function that gives us the relationship about the how the time will grow as the input grows.

// Why this is important ?
// Binary search has a complexity og O(logn).
// Linear search has a complexity og O(n).

// Always look for worst case complexity.
// Always look at complexity for large / infinite data.
// We don't care about actual time but the relation with time and input.

// Since we don't care the value and the relation, we ignore the constants.
// Always ignore less dominant terms.

// O(3n3 + 4n2 + 5n +6) => O(n3 + n2 + n) => O(n3);

// Interview Question: My TC of the code is O(n3) what does it mean? It means your code time and input relation will not exceed O(n3).

// Look at the hand written notes : 14_IMG_HW

// What if an algorithm have same upper bound and lower bound. Example consider : n2

/* 
Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. 
Space complexity includes both Auxiliary space and space used by input.

For example, if we want to compare standard sorting algorithms on the basis of space, then Auxiliary Space would be a better criteria than Space Complexity. 
Merge Sort uses O(n) auxiliary space, Insertion sort and Heap Sort use 0(1) auxiliary space. 
Space complexity of all these sorting algorithms is O(n) though.
*/

// Space Complexity
