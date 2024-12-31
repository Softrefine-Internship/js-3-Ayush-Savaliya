// Write a JavaScript program to get the index of an object by it's property.

// Input:
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')


arrayObj = [{
    prop_1: 'val_1',
    prop_2: 'val_2',
    prop_3: 'val_3'
}, {
    prop_1: 'val_4',
    prop_2: 'val_5',
    prop_3: 'val_6'
}];
let property = "prop_2";
let value = "val_2";
let index = -1;
const getIndex = function (property,value) {
  for (let i = 0; i < arrayObj.length; i++) {
    if (arrayObj[i][property] === value) {
        index = i;
        break;
    }
  }
  return index;
}
console.log(getIndex(property,value));
