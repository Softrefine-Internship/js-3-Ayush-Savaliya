// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

const arr1 = "This is a demo String find the largest word from it";
const arr = arr1.split(' ');
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