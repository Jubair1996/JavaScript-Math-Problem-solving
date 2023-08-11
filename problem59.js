function factorialOfNumbers(number){
    let multiplication = 1;
    for(let i = 1; i <= number; i++){
        multiplication = multiplication * i;
    }
    return multiplication;
}
const myNumber = 9;
const result = factorialOfNumbers(myNumber);
console.log(result);