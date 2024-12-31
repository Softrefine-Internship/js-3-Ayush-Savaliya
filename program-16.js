// Write a JavaScript program to find intersection of two sets.

// Input:
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);
let set1 = new Set([3, 4, 6, 5]);
let set2 = new Set([1, 2, 3, 4, 5]);
let ansSet = new Set();

const intersectionSet = function (s1, s2) {
  for (el of s1) {
    if (s2.has(el))
      ansSet.add(el);
  }
}

intersectionSet(set1, set2);
intersectionSet(set2, set1);
console.log(ansSet)