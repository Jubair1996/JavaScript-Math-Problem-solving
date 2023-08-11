// Calculate the total cost of the products in a shopping cart

// Sum
/* const shoppingCart = [
  { name: "A", price: 1200 },
  { name: "B", price: 2200 },
  { name: "C", price: 3700 },
  { name: "D", price: 600 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
  }
  return sum;
}
const expense = totalCost(shoppingCart);
console.log("Total Expense:", expense); */

// Quantity

const shoppingCart = [
  { name: "A", price: 1200, quantity: 2 },
  { name: "D", price: 600, quantity: 3 },
  { name: "B", price: 2200, quantity: 4 },
  { name: "C", price: 3700, quantity: 5 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const totalQuantityCost = product.price * product.quantity;
    sum = sum + totalQuantityCost;
  }
  return sum;
}
const expense = totalCost(shoppingCart);
console.log("Total Expense:", expense);
