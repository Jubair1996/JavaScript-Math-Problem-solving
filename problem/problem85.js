// Problem====5

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "Array is empty please provide a valid number";
  }
  let arraySum = 0;
  for (let i = 0; i < changeArray.length; i++) {
    const arrayIndex = changeArray[i];
    const element = arrayIndex;
    arraySum = arraySum + element;
  }
  if (arraySum >= totalDue) {
    return true;
  } else {
    return false;
  }
}
var taka = [1, 5, 5];
var chipsPrice = 10;
var result = canPay(taka, chipsPrice);
console.log(result);
