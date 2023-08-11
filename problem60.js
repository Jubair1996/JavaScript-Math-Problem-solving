function reverseFactorial(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
const myNumber = 9;
const result = reverseFactorial(myNumber);
console.log(result);
