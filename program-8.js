// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output:
// total value for "price": 1850
// total value for "quantity": 6

arr = [
    {
        product: "Laptop",
        price: 1000,
        quantity: 2,
    },
    {
        product: "Phone",
        price: 600,
        quantity: 3,
    },
    {
        product: "Monitor",
        price: 250,
        quantity: 1,
    },
]

let value = 0;
property = 'price';
// property = 'quantity';
const calculateValue = function (property) {
  for (i = 0; i < arr.length; i++)
    value += arr[i][property];
  return value;
}

console.log(`Total value for "${property}": ${calculateValue(property)}`)