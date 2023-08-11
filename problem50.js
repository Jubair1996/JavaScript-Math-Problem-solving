// তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
function oddEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
const myNumber = 24;
const result = oddEven(myNumber);
console.log(result);
