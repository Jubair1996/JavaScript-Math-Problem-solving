// একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

function calculateRectangleArea(length, height) {
  const area = length * height;
  return area;
}
const length = 10;
const height = 5;
const area = calculateRectangleArea(length, height);
console.log(area);
