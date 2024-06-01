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
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let countVowels = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      countVowels += 1;
    }
  }
  return countVowels;
}
console.log(countVowels('hello world'));

//problem 06
function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(['a', 'b', 'c'])); // "a"

//problem 07
function isArrayEmpty(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false

//problem 08
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  var factorial = 1;
  for (var i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040
