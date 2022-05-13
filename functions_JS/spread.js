const myArray = [3, 6, 9];
const newArray = [...myArray, 12];

// ...myArray = 3, 6, 9

console.log(newArray);

var sum = (a, b, c) => a + b + c;

console.log(sum(...myArray));