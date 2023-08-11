// কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

function gpa(number) {
  if (number >= 0 && number <= 100) {
    if (number >= 0 && number < 33) {
      return "My number is " + number + " . My grade is F";
    } else if (number >= 33 && number < 40) {
      return "My number is " + number + " . My grade is D";
    } else if (number >= 40 && number < 50) {
      return "My number is " + number + " . My grade is C";
    } else if (number >= 50 && number < 60) {
      return "My number is " + number + " . My grade is B";
    } else if (number >= 60 && number < 70) {
      return "My number is " + number + " . My grade is A-";
    } else if (number >= 70 && number < 80) {
      return "My number is " + number + " . My grade is A";
    } else {
      return "My number is " + number + " . My grade is A+";
    }
  }
}
const myNumber = 80;
const results = gpa(myNumber);
console.log(results);
