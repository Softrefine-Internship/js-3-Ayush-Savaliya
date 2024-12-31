// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }


const str = 'hello';
obj = {}

for (element of str) {
  // console.log(element.value)
  if (obj.hasOwnProperty(element)) {
    obj[element] = obj[element] + 1 ;
  }
  else {
    obj[element] = 1;
  }
}
console.log(obj)