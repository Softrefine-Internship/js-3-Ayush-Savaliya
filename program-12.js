// Write a JavaScript program to get the longest string in an array.

// Input:  
// arr = [
    // "JavaScript",
    // "Python",
    // "Java",
    // "C++",
    // "Ruby",
    // "Swift",
// ]

// Output: "JavaScript"

arr = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
]

let len = 0;
let pos = 0;

const longestStr = function(){
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i].length > len) {
      len = arr[i].length;
      pos = i;
    }
  }
  return pos;
}
console.log(arr[longestStr()]);
