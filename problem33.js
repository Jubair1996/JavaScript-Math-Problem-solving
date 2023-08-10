// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.
function findOddSum(numbers) {
  let oddSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = numbers[i];
    const number = index;
    if (number % 2 === 1) {
      oddSum = oddSum + number;
    }
  }
  return oddSum;
}
const arrayNumber = [5, 7, 8, 10, 45, 30];
const results = findOddSum(arrayNumber);
console.log(results);
