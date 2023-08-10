// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. Input: The first line of the input is the marks of the five subjects mentioned above, respectively. Output: Print the result in 2 decimal places.

// Sample Input: 75.25, 65, 80, 35.45, 99.50 Output: 71.04
// const mathematics = 75.25;
// const biology = 65;
// const chemistry = 80;
// const physics = 35.45;
// const bangla = 99.5;
// const totalMarks = mathematics + biology + chemistry + physics + bangla;
// let averageMarks = totalMarks / 5;
// const averageMarksIn2Decimal = averageMarks.toFixed(2);
// averageMarks = parseFloat(averageMarksIn2Decimal);
// console.log(averageMarks);

function averageMarks(mathematics, biology, chemistry, physics, bangla) {
  const totalMarks = mathematics + biology + chemistry + physics + bangla;
  let averageMarks = totalMarks / 5;
  const averageMarksIn2Decimal = averageMarks.toFixed(2);
  averageMarks = parseFloat(averageMarksIn2Decimal);
  return averageMarks;
}
const mathematics = 75.25;
const biology = 65;
const chemistry = 80;
const physics = 35.45;
const bangla = 99.5;
const result = averageMarks(mathematics, biology, chemistry, physics, bangla);
console.log(result);
