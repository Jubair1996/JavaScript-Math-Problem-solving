// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal
const sides1 = 9;
const sides2 = 8;
const sides3 = 19;

if(sides1 === sides2 || sides1 === sides3 || sides2 === sides3){
    console.log("The triangle is Isosceles");
}
else{
    console.log("The triangle is not Isosceles");
}