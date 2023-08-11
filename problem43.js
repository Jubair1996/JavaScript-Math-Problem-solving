// Tom and his friends are participating in the "Who is the tallest?" competition. As per the name, the person with the highest height will be the winner. Can you find who is the tallest among Tom and all of his friends?

// Input: The input line can have multiple integer numbers, xi (The height of ith friend in cm).

// Output: Print the height of the tallest friend (cm).

// Sample Input-1: 157 134 188
// Sample Output-1: 188
// Sample Input-2: 167 100 120 165 137
// Sample Output-2: 190

function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      const index = i;
      const element = numbers[index];
      if (element > largest) {
        largest = element;
      }
    }
    return largest;
  }
//   const height = [157, 134, 188];
  const height = [167, 100, 120, 165, 137];
  const tallest = maxInArray(height);
  console.log("Tallest person is: ", tallest);