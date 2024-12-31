// Write a JavaScript program to check subset.

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false


// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true


// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

let set1 = new Set([3, 4]);
let set2 = new Set([1, 2, 3, 4, 5]);


const checkSubset = function (s1, s2) {
  let flag = true;
  for (el of s1) {
    // console.log(el)
    if (!s2.has(el))
      flag = false;
  }
  return flag;
}

console.log(checkSubset(set1, set2));