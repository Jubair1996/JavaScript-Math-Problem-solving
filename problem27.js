// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways: 

// Has return+ Has parameter .
/* function odd_even(number){
    if(number % 2 === 0){
        return number+ " is Even Number";
    }
    else{
        return number + " is Odd Number"
    }
}
const myNumber = 15;
const results = odd_even(myNumber);
console.log(results); */

// No return+Has parameter
function odd_even(number){
    if(number % 2 === 0){
        console.log(number+ " is Even Number");
    }
    else{
       console.log(number + " is Odd Number");
    }
}
const myNumber = 16;
const results = odd_even(myNumber);