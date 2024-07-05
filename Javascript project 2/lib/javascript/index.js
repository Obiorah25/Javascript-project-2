// Question 1. function that reverses a given string.
function reverseString(str) {
  return str.split('').reverse().join('');
}
// Example is given below 
console.log(reverseString("tunde")); 


// Question 2.Create a function that counts the number of characters in a string.
function countCharacters(str) {
  return str.length;
}
// Example is given below 
console.log(countCharacters("emeka")); 
console.log(countCharacters("sunshine")); 

// Question 3.Write functions to find the maximum and minimum values in an array of numbers.

// a. finding the maximum value in an array
function findMax(arr) {
    return Math.max(...arr);
  }
  // Example is given below
  console.log(findMax([1, 45, 3, 9, 13])); 

  // b. finding the minimum value in an array
  function findMin(arr) {
    return Math.min(...arr);
}
//  Example is given below
console.log(findMin([96, 77, 7, 86, 33]));

// Question 4. Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
//  Example is given below
console.log(sumArray([99, 2, 23, 4, 8])); 

// Question 5.Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
  return arr.filter((ele) => ele === condition);
}
// Example is given below
const numbers = [1, 2, 45, 99, 5, 34, 7, 8, 13, 10];
// condition: filter numbers greater than 5
const greaterThanEight = filterArray(numbers, num => num > 8);
console.log(greaterThanEight); 

// Question 6. Write a function to calculate the factorial of a given number.
function factorialIterative(n) {
  if (n < 0) return -1; // Factorial is not defined for negative numbers
  let result = 1;
  for (let i = 1; i <= n; i++) {
      result *= i;
  }
  return result;
}
// Example is given below
console.log(factorialIterative(6));

// Question 7. Create a function to check if a number is prime or not.
function isPrime(q) {
  if (q <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (q <= 3) return true;  // 2 and 3 are prime numbers

  // Check for divisibility by 2 and 3
  if (q % 2 === 0 || q % 3 === 0) return false;

  // Check for factors from 5 to the square root of n
  for (let i = 5; i * i <= q; i += 6) {
      if (q % i === 0 || q % (i + 2) === 0) return false;
  }

  return true;
}
// Example is given below
console.log(isPrime(17));

// Question 8. Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function generateFibonacci(n) {
  let fibonacciSeries = [];
  let a = 0, b = 1, nextTerm;

  for (let i = 1; i <= n; i++) {
      fibonacciSeries.push(a);
      nextTerm = a + b;
      a = b;
      b = nextTerm;
  }

  return fibonacciSeries;
}
// Example is given below
const numberOfTerms = 10; // Change this value to generate more terms
const fibonacciSeries = generateFibonacci(numberOfTerms);
console.log(`Fibonacci Series up to ${numberOfTerms} terms: ${fibonacciSeries.join(', ')}`);


