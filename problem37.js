// Calculate the interest. Just how to calculate. Will do with that thought. Now there is no need to worry whether interest is good or bad. Just try to do it from the angle of how to write it in code if there is a formula.

// সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।

function calculateInterest(capital, rate) {
  const interests = (capital / 100) * rate;
  const resultToFixed = interests.toFixed(2);
  const resultParsefloat = parseFloat(resultToFixed);
  return resultParsefloat;
}
const clientsCapital = 7410;
const rateOfInterest = 3;

const profit = calculateInterest(clientsCapital, rateOfInterest);
console.log(profit);
