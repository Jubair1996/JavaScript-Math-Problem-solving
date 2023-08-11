// এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
function hoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}
const hours = 2.5;
const minutes = hoursToMinutes(hours);
console.log(minutes);
