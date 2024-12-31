// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]

arr = [
    {
       employeeName: "Ram",
       employeeId: 23
    },
    {
       employeeName: "Shyam",
       employeeId: 24
    },
    {
       employeeName: "Ram",
       employeeId: 21
    },
    {
       employeeName: "Ram",
       employeeId: 25
    },
    {
       employeeName: "Kisan",
       employeeId: 22
    },
    {
       employeeName: "Shyam",
       employeeId: 20
    }
]

const map = new Map()

for (i = 0; i < arr.length; i++) {
  if (map.has(arr[i].employeeName)) {
    val = map.get(arr[i].employeeName);
      map.set(arr[i].employeeName, val + 1);
  } else {
    map.set(arr[i].employeeName, 1);
  }
}

// console.log(map)

let array = [];
for (el of map) {
   let [key,values] = [...el]
   // console.log(values);
   array.push({ 'employeeName': key ,'occurrences':values });
}
console.log(array)