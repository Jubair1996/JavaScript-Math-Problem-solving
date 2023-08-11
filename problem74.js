// এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।

// For of  loop

// function onlyPositive(number){
//     let array =[];
//     for(const item of number){
//         if(item > 0){
//             array.push(item);
//         }
//         else{
//             break;
//         }
//     }
//     return array;
// }
// const numbers = [45, 87, 96, 11, 53, -56, 71, 28];
// const result = onlyPositive(numbers);
// console.log(result);

// for loop

function processPositiveNumbers(array) {
  const positiveNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      positiveNumbers.push(array[i]);
    } else {
      break;
    }
  }

  return positiveNumbers;
}

const inputArray = [3, 7, 2, 0, -1, 5, 9];
const result = processPositiveNumbers(inputArray);
console.log(result);
