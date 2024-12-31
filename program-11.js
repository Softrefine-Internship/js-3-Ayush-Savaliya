// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

// const str = 'evil';
// const strAnagram = 'vile';
// const str = 'a gentleman';
// const strAnagram = 'elegant man';
const str = 'eleven plus two';
const strAnagram = 'twelve plus one';

let map = new Map();

const str1 = str.replaceAll(' ','')
const str2 = strAnagram.replaceAll(' ','')
// console.log(str1)

const checkForAnagram = function (str1, str2) {
  // console.log(str2.length)
  if (str1.length == str2.length) {
    for (i = 0; i < str1.length; i++) {
      if (map.has(str1[i])) {
        val = map.get(str1[i]);
        map.set(str1[i], val + 1);
      } else {
        map.set(str1[i], 1);
      }
    }
    for (i = 0; i < str2.length; i++) {
      if (map.has(str2[i])) {
        val = map.get(str2[i]);
        if (val - 1 == 0)
          map.delete(str2[i]);
        else
          map.set(str2[i], val - 1);
      }
    }
    if (map.size)
      return false;
    else
      return true;
  }
  else
    return false;
  
}

console.log(checkForAnagram(str1, str2))
