// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const index = array[i];
    sum = sum + index;
  }
  const average = sum / array.length;
  return average;
}
const myArray = [10, 20, 30, 40, 50];
const results = make_avg(myArray);
console.log(results);
