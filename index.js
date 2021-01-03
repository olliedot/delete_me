const numbers = [23,3,2,2,32,6,46,34,63,465,566,7,9];
let sum = 0;

numbers.map((number) => {
  sum += number;
});

console.log(sum);