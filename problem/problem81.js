// Problem==========1

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a valid number";
  } else {
    const cube = number ** 3;
    return cube;
  }
}
const number = 4;
const result1 = cubeNumber(number);
console.log(result1);
