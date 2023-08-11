// 1.Write a function that will take 3 numbers will returns the max numbers

// First time do it using if-else
/* function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } 
  else if (b >= a && b >= c) {
    return b;
  } 
  else {
    return c;
  }
}

const num1 = 10;
const num2 = 25;
const num3 = 15;

const maxNumber = findMax(num1, num2, num3);
console.log("maxNumber); */

// Second time do it using Math.max

function findMax(a, b, c) {
  return Math.max(a, b, c);
}

const num1 = 10;
const num2 = 25;
const num3 = 15;

const maxNumber = findMax(num1, num2, num3);
console.log(maxNumber);
