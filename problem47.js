// sum of an array numbers
function getSumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    // console.log(index, element,sum);
  }
  return sum;
}
const myNumbers = [12, 33, 45, 23, 66, 44, 66, 78, 98];
const result = getSumOfAnArray(myNumbers);
console.log(result);
