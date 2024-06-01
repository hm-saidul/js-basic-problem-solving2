// Problem 01

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(30)); //86

//problem 02
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(2));

//problem 03
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

//problem 04
function findSmallestNum(arr) {
  return Math.min(...arr);
}
console.log(findSmallestNum([3, 5, 1, 9]));

//problem 05
// function countVowels(str) {
//   let vowels = 'aeiouAEIOU';
//   return;
// }
// console.log(countVowels('hello world'));
