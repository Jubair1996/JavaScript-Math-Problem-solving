// 2.Write a function that will take 3 perameters and will returns the min numbers
// First time do it using if-else

/* function findMinNumber(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}
let num1 = 10;
let num2 = 5;
let num3 = 8;

let minNumber = findMinNumber(num1, num2, num3);
console.log(minNumber); */

// Second time do it using Math.min

function findMin(a, b, c) {
  return Math.min(a, b, c);
}
const result = findMin(10, 5, 8);
console.log(result);
