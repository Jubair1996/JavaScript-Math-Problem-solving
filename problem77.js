// Use add and multiplication to calculate wood requirements
function woodCalculate(chairQuantity, tableQuantity, badQuantity) {
  const perChairWood = 3;
  const perTableWood = 5;
  const perBadWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const badWood = badQuantity * perBadWood;

  const totalWood = chairWood + tableWood + badWood;
  return totalWood;
}
const number1 = 1;
const number2 = 0;
const number3 = 0;
const results = woodCalculate(number1, number2, number3);
console.log(results);
