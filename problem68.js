//একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।
function findMinNumber(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}
let num1 = 10;
let num2 = 5;
let num3 = 8;

let minNumber = findMinNumber(num1, num2, num3);
console.log(minNumber);
