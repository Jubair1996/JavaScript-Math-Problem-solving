// leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
function leapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  }
  return false;
}
const myYear = 1952;
const result = leapYear(myYear);
console.log(result);
