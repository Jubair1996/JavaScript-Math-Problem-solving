/* function factorialWhile(number){
    let i = 1;
    let result = 1;
    while(i <= number){
        result = result * i;
        i++;
    }
    return result;
}
const myNumber = 9;
const results = factorialWhile(myNumber);
console.log(results);
 */
// Reverse
function factorialWhile(number) {
  let i = number;
  let result = 1;
  while (i >= 1) {
    result = result * i;
    i--;
  }
  return result;
}
const myNumber = 9;
const results = factorialWhile(myNumber);
console.log(results);
