//একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

function minInArray(numbers) {
  let lowest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    //   console.log(element);
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}
const height = [167, 190, 120, 165, 137];
const smallest = minInArray(height);
console.log("Smallest person is: ", smallest);