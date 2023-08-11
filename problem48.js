// Odd sum of an arrays
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

function oddNumbersSumOfAnArray(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 1) {
      // console.log(index,element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}
const myNumbers = [12, 33, 45, 23, 66, 44, 66, 78, 98];
const oddNumbers = oddNumbersSumOfAnArray(myNumbers);
// console.log(oddNumbers);
const result = getSumOfAnArray(oddNumbers);
console.log(result);
