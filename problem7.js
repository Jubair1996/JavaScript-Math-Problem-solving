// const fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’. 
// b) Remove ‘Orange’ and add ‘Watermelon’.

const fruits = ['Apple', 'Banana', 'Orange'];
const bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);

fruits[1]="Mango";
console.log(fruits);
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);