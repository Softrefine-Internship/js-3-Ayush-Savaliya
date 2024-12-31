// Write a JavaScript program to flatten object into single depth object.

// Input:
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output:
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }

// Write a JavaScript program to flatten object into single depth object.

let obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

const flattenObject = (obj) => {
  let flattenObj = {};

  for (let i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      const temp = flattenObject(obj[i]);
      for (let j in temp) {
        flattenObj[i + "." + j] = temp[j];
      }
    } else {
      flattenObj[i] = obj[i];
    }
  }
  return flattenObj;
};

console.log(flattenObject(obj));