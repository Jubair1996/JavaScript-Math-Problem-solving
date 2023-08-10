// You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.

const num1 = 13;
const num2 = 79;
const num3 = 25;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1);
  } else {
    console.log(num3);
  }
} else {
  if (num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}

// or

/* if(num1 > num2 && num1 > num3){
    console.log(num1);
}
else if(num2 > num1 && num2 > num3){
    console.log(num2);
}
else{
    console.log(num3);
} */
