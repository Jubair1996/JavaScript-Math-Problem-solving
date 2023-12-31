// leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

// Write a function called leapYear() and check whether the next year i.e. 2023 is a leap year or not. The function will return true if it is a leap year and false if it is not a leap year.
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const checkTheYear = 2023;
const isLeapYear = leapYear(checkTheYear);
console.log(isLeapYear);
