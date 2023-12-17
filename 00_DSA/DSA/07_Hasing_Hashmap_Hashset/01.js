/* Hashing 

Is mainly used to implement dictionaries, where you key value pairs. 
Also used to implement sets. 

It provides best options for search insert and delete in O(1) time on an average.

Hashtable and hashing always works with unique values. 

Hashing is not suitable: 
	1) finding the closet value. [We can used AVL tree or Red Black Tree]	
	2) Sorted Date. [We can used AVL tree or Red Black Tree]	
	3) Prefix Searching. [We can use Trie]

Hashing does exact key search.

Hashtable is a data structure and hashing is the technique. It is the 2nd most used data structure. 

Applications of Hashing: 
1) Dictionaries.
2) Database Indexing.
3) Cryptography.
4) Caches.
5) Symbol Tables in compliers/Interpreters.
6) Routers
7) Getting data from databases.
8) Many more.

Direct Address Table: DAT helps us understand why we need hashing. 
Imagine a situation where you have 1000 kys with values from 0 to 999, how would you have implemented the following in O(1) time i.e., 1)Search 2) Insert 3) Delete

Example Operations: 
insert(10)
insert(20)
insert(119)
search(10)
search(20)
delete(119)
search(119)

Here we create a boolean array initialized with false in every position. 
For every insert operation we will change the status from false to true. 
For every search operation we will check the boolean status and return the status.
For every delete operation we will change the status back to false. 

In Direct Address table i.e., an array provides us an indexed return in O(1) time. 

But the DAT have problems which are: 
1) It cannot store large numbers or keys, like phone numbers.
2) Floating numbers cannot be handled.
3) It cannot handle strings. 

To overcome this hashing was introduced.

Let us consider a large universe of keys that can be phone numbers, names, Employee ID.
Idea of hashing is use the hash function and convert these large key values into small values that can be used an index in an array, and that array is called hashtable.

Hash Function: 
    0) Every time we hash a value it should give the same hash value.
	1) Should always map a large key to same small key.
	2) Should generate values from 0 to m-1.
	3) Should be fast, O(1) for integers and O(len) for string of length "len".
	4) Should uniformly distribute large keys into Hash table slots. 

Collision Handling: 

If we know keys in advance, then we can go for perfect hashing.

If we do not know the keys then we can use one of the following: 
    1) Chaining 
    2) Open Addressing.
        a) Linear Probing.
        b) Quadratic Probing.
        c) Double Hashing.

Chaining: 
    hash(key) = key % 7;

    keys = {50,21,58,17,15,49,56,22,23,25}

    HashTable: (Array of Linked List)
            Indexes       Values
               0            21    --> 49  --> 56
               1            50    --> 15  --> 22
               2            58    --> 23
               3            17
               4            25
               5
               6

Performance: (Keeping the previous Example in mind)
    m = no. of slots in Hash Table. (7 = 0 to 6)
    n = no. of keys to be inserted. (10)

    load factor(alpha) = n/m = How big we want our hash table. It is a trade off between time and space. Less the load factor less the collisions.

    Expected chain length = If the hash function uniformly distributes the keys then the chain length will be equal to alpha i.e., n keys and n hash slots.

    Just in case if the chain length is alpha then,
        Expected Time to Search: O(1+alpha);
        Expected Time to Insert/ Delete: O(1+alpha);
    */

/* class MyHash {
  constructor(b) {
    this.BUCKET = b;
    this.table = [];
    for (let i = 0; i < b; i++) this.table[i] = [];
  }
  insert(x) {
    let i = x % this.BUCKET;
    this.table[i].push(x);
  }
  search(x) {
    let i = x % this.BUCKET;
    for (let j = 0; j < this.table[i].length; j++) {
      if (this.table[i][j] === x) return true;
    }
    return false;
  }
  delete(x) {
    let i = x % this.BUCKET;
    if (this.table[i].indexOf(x) === -1) return;
    this.table[i].splice(this.table[i].indexOf(x), 1);
  }
} */

// let hashie = new MyHash(7);
// hashie.insert(70);
// hashie.insert(71);
// hashie.insert(56);
// hashie.insert(71);
// console.log(hashie);
/* MyHash { BUCKET: 7, table: [ [ 70, 56 ], [ 71, 71 ], [], [], [], [], [] ] } */

// console.log(hashie.search(71));
// true
// console.log(hashie.search(68));
// false

// hashie.delete(80);
// console.log(hashie);
/* MyHash { BUCKET: 7, table: [ [ 70, 56 ], [ 71, 71 ], [], [], [], [], [] ] } */

// hashie.delete(71);
// console.log(hashie);
/* MyHash { BUCKET: 7, table: [ [ 70, 56 ], [ 71 ], [], [], [], [], [] ] } */

// Open Addressing
/* No. of Slots in Hash Table >= No. of keys to be inserted.
    All the keys mus go into the same array or hashtable.
    Also the if the keys are 100, then the table or array length should be greater or equal to 100.
    This provides cache memory to us. 

    There are 3  ways of implementing open addressing: 
    1) Linear Probing 
    2) Quadratic Probing
    3) Double Chaining

    Linear Probing: Linearly search for next empty slot when there is a collision.

    hash(key) = key % 7

    keys = { 48, 42, 50, 55 , 53 }

    Indexes     Values
       0          42
       1          50
       2          55 --> Should have been in 6th place.
       3
       4          53
       5            
       6          48

       In linear search if the last slot is filled and we need to add a value to that slot then,
       we take a circle and find the next empty slot.

       In case of searching, when we find the index we shall start looking for the value linearly until,
        1) We get the value.
        2) We encounter an empty slot.
        3) Or we traverse back to the same slot. 

       In case of deleting what we do is we first search the element and we do not empty the slot but instead 
        we add "deleted" in it. 

       Clustering (A problem with linear Probing)
        Suppose you have value and its hash key is 2. But there is a value in 2 already.
        Because of which the cluster size increases.
        Assume the cluster size as K, then clustering takes k+1 size.
        
        Now this clustering makes operations costly. 

        How to handle clustering with linear Probing ?

        h(key) = key % 7;

        In case of Linear Probing: h(key,i) = (h(key) + i) % 7; {Finding the next available sot linearly.}

        In case of Quadratic Probing: h(key,i) = (h(key) + i^2) % m; {it looks for i**2 position to place the key.}
        Also the alpha value i.e, n/m ==> (keys/slots) should be less than 0.5 and the hash value should be prime number, for Quadratic Probing to work.
        These type of clustering is called secondary clustering. 

        Double Hashing: Here we use two hash functions.
        h(key,i) = (h1(key) + i*h2(key)) % m.

        1) One is the regular key % 7;
        2) Another hash function to find the next free slot.

        If h2(key) is relatively prime to m, then it always find a free slot if there is one.
        Distributes keys more uniformly than linear probing and quadratic hashing. 
 */

/* Working of Double Hashing

    hash(key,i) = (h1(key) + i*h2(key)) % m;
    i = number of collision. If it is the first collision put one, else increase the number 1.
    m = prime number.

    h1(key) = key % 7;
    h2(key) = 6 - (key % 6);        
        Important Point = h1 should never return 0 else it will keep probing the same location.


    keys = { 49, 63, 56, 52, 54, 48 };
        
        hash(49) = 49 % 7 => 0 [Since there is no collision]
        
        hash(63) = 63 % 7 => 0 [Collision Occurred]
        hash(63,1) = (63 % 7 + 1 * (6 - 63 % 6)) % 7 => (0 + 1 * (6 - 3)) % 7 => 3 % 7 => 3

        hash(56) = 56 % 7 => 0 [Collision Occurred]
        hash(56,1) = (56 % 7 + 1 * (6 - 56 % 6)) % 7 => (0 + 1 * (6 - 2)) % 7 => 4 % 7 => 4 

        hash(52) = 52 % 7 => 3 [Collision Occurred]
        hash(52,1) = (52 % 7 + 1 * (6 - 52 % 6)) % 7 => (3 + 1 * (6 - 4)) % 7 => 5 % 7 => 5 

        hash(54) = 54 % 7 => 5 [Collision Occurred]
        hash(54,1) = (54 % 7 + 1 * (6 - 54 % 6)) % 7 => (5 + 1 * (6 - 0)) % 7 => 11 % 7 => 4 [Collision Occurred Again] 
        hash(54,2) = (54 % 7 + 2 * (6 - 54 % 6)) % 7 => (5 + 2 * (6 - 0)) % 7 => 17 % 7 => 3 [Collision Occurred Again] 
        hash(54,3) = (54 % 7 + 3 * (6 - 54 % 6)) % 7 => (5 + 3 * (6 - 0)) % 7 => 23 % 7 => 2

        hash(48) = 48 % 7 => 6

        Index       Values
          0           49
          1           
          2           54
          3           63
          4           56
          5           52
          6           48
*/

/* Why h2(key) and m should be relatively prime ?
    Each time there is collision we need to know the number of slot shift, 
    that we should do to get the next empty slot.

    Suppose: 
        (1*6) % 7 = 6
        (2*6) % 7 = 5
        (3*6) % 7 = 4
        (4*6) % 7 = 3
        (5*6) % 7 = 2
        (6*6) % 7 = 1

    Why number 6 here is because out of 7 slots, the slot we wanted is filled, hence we check for the remaining 6 slots.
*/

/* Chaining vs Open Addressing 

CHAINING: 
    1) Hash Table never fills.
    2) Less sensitive to Hash functions.
    3) Poor Cache Performance.
    4) Extra space for links.
    5) Time taken for an empty slot is (1+alpha) times.

OPEN ADDRESSING: 
    1) Table may become full and resizing becomes mandatory. 
    2) Extra care required for clustering.
    3) Cache friendly. 
    4) Extra space might be needed to achieve same performance.
    5) Time taken for an empty slot is (1/(1 + alpha)) times.

*/

// Set in Javascript
/* 
    1) Distinct Elements.
    2) Elements are traversed in insertion order.
    3) No Indexing (Or Random Access).
    4) Insertion, Search, Delete, Union, Intersection and set difference are faster.
    5) Uses hashing internally.
*/

let s1 = new Set();
s1.add(10);
s1.add(20);
s1.add(20);
console.log(s1);
// Set(2) { 10, 20 }

let s2 = new Set([100, 200, 300, 300]);
console.log(s2);
// Set(3) { 100, 200, 300 }

console.log(s2.size);

s2.has(200); //true
s2.delete(200);
s2.clear();

// We can apply forEach and for of on a set.
s1.forEach((x) => console.log(x));

for (let x of s1.keys()) {
  console.log(x);
}
