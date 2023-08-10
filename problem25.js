// Write a function called make_avg() which will take an three integers and return the average of those values.
function make_avg(num1, num2, num3){
    const numberSum = num1 + num2 + num3;
    const average = numberSum / 3;
    return average;
}
const number1 = 20;
const number2 = 20;
const number3 = 20;
const results = make_avg(number1, number2, number3);
console.log(results);