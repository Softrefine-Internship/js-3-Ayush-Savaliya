// Write a JavaScript program to generate all combinations of a string.

// Input: Dog 
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

const str = 'Dog';
ans = [];
let a = '';

for (let i = 0; i < str.length; i++){
  a = str[i];
  ans.push(a);
  for (let j = i + 1; j < str.length; j++){
    a = a + str[j];
    ans.push(a);
  }
}

console.log(ans);