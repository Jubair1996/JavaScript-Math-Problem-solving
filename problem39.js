// Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joined his class. She was also a topper at her previous school. On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim & Dela, whoever is the topper, will get this tasty cake." Can you find out who will get this cake?

// Input: The input line has two values, m (The marks Jim has got) and n (The marks Dela has got). Output: Print the name of the topper.

// Sample Input-1: 84 75
// Sample Output-1: Jim
// Sample Input-2: 69 97
// Sample Output-2: Dela

function findingTopper(jim, dela) {
  if (jim > dela) {
    return "Jim";
  } else {
    return "Dela";
  }
}

const jimsMarks = 69;
const delasMarks = 97;
const theCakeWillGet = findingTopper(jimsMarks, delasMarks);
console.log(theCakeWillGet);
