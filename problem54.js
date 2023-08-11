// Even number check
function isEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
const myNumber = 302;
const result = isEven(myNumber);
console.log(result);
