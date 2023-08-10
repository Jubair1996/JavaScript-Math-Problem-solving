// Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program. Input: The first line of the input contains the number. Output: Print the remainder.

// Sample Input: 119

function remainder(number){
 const remainder = number % 5;
 return remainder;   
}
const sarahNumber = 119;
const result = remainder(sarahNumber);
console.log(result);