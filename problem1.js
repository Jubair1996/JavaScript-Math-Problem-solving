// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return. Input: The first line of the input is the taka Harry’s mom gave him. The second line is the cost of 1 kg of oranges and 1 kg of apples. Output: Print the result.

// Sample Input: 1000 700 Output: 300

// Solution

// var momGaveMoney = 1000;
// var orangesPrice = 400;
// var applePrice = 300;
// var totalCost = orangesPrice + applePrice;
// var shopkeeperMoneyReturn = momGaveMoney - totalCost;
// console.log(shopkeeperMoneyReturn);

function shopkeeperMoneyReturn(momGaveMoney, orangesPrice, applePrice) {
  const totalCost = orangesPrice + applePrice;
  const shopkeeperMoneyReturn = momGaveMoney - totalCost;
  return shopkeeperMoneyReturn;
}
const momGaveMoney = 1000;
const orangesPrice = 400;
const applePrice = 300;
const result = shopkeeperMoneyReturn(momGaveMoney, orangesPrice, applePrice);
console.log(result);
