// This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

// Input: The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and z (The marks Chinku has got)

// Output: Print the name of the topper.

// Sample Input-1: 84 99 77
// Sample Output-1: Dela
// Sample Input-2: 69 97 99
// Sample Output-2: Chinku

function findingTopper(x, y, z) {
  if (x > y && x > z) {
    return "Jim the cake will get";
  } else if (y > x && y > z) {
    return "Dela the cake will get";
  } else {
    return "chinku the cake will get";
  }
}
const jimsMarks = 69;
const delasMarks = 97;
const chinkusMarks = 99;
const theCakeWillGet = findingTopper(jimsMarks, delasMarks, chinkusMarks);
console.log(theCakeWillGet);
