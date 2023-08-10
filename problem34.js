// তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে

// You will be given Celsius as input to the function. You calculate the temperature and convert it to Fahrenheit and return the output
function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
const celsiusNumber = 11;
const results = celsiusToFahrenheit(celsiusNumber);
console.log(results);
