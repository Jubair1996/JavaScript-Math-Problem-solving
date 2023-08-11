// word Reverse

function wordReverse(str) {
  const word = str.split(" ");
  const result = [];
  for (let i = word.length - 1; i >= 0; i--) {
    const element = word[i];
    result.push(element);
  }
  const reversed = result.join(" ");
  return reversed;
}
const myString = "I am  a good boy";
const results = wordReverse(myString);
console.log(results);
