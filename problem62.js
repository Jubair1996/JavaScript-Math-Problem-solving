// Find tha largest Name from of an array
function largest(array) {
  let largest = [0];
  for (let i = 1; i < array.length; i++) {
    // const index = array[i];
    if (array[i].length > largest.length) {
      largest = array[i];
    }
  }
  return largest;
}
const array = ["Zahiduuuu", "Jubair", "Sahiduuu", "Ronyyyyyyyyyyyyyyyyyyi"];
const result = largest(array);
console.log(result);
