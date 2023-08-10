// তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ হাজার টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

const myBudget = 50000;

if (myBudget > 80000) {
  console.log("I will buy a mac book");
} else if (myBudget > 60000) {
  console.log("I will buy a gaming laptop. ");
} else if (myBudget > 40000) {
  console.log("I will buy a lenovo youg");
} else if (myBudget > 20000) {
  console.log("I will buy a second hand laptop");
} else {
  console.log("I will work with my smartphone");
}
