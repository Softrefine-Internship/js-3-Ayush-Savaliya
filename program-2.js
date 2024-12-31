// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }

arr = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15]
];
let obj = {};

arr.forEach(el => {
  let [key, value] = [...el];
  obj[key] = value;
});

console.log(obj)