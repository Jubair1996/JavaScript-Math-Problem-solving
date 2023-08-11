// Tom and his friends are participating in the "Who is the lowest?" competition. As per the name, the person with the lowest height will be the winner. Can you find who is the lowest among Tom and all of his friends?

// Input: The input line can have multiple integer numbers, xi (The height of ith friend in cm).

// Output: Print the height of the lowest friend (cm).

// Sample Input-1: 157 134 188
// Sample Output-1: 188
// Sample Input-2: 167 100 120 165 137
// Sample Output-2: 190
// Write a function to get the lowest in an array
function minInArray(numbers) {
  let lowest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    //   console.log(element);
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}
const height = [167, 190, 120, 165, 137];
const smallest = minInArray(height);
console.log("Smallest person is: ", smallest);
