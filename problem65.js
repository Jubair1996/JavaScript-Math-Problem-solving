// Reverse String

function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversed = reversed + element;
    // console.log(element, reversed);
  }
  return reversed;
}
const myString = "I am  a good boy";
const results = reverseString(myString);
console.log(results);
