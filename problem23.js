// pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
// const pizza = {
// toppings: ['cheese', 'sauce', 'pepperoni'],
// crust: 'deep dish',
// serves: 2
// }
// এবং pepperoni প্রিন্ট করবা।
const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "deep dish",
  serves: 2,
};
const pepperoni = pizza.toppings[2];
console.log(pepperoni);
