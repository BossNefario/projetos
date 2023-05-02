const numbers = [2, 4, 5, 7, 10, 11, 12];
let sum = 0;

numbers.forEach(number => {
  sum += number;
});

let average = sum/numbers.length;

console.log("Average:", average);