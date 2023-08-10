// একটা ফাংশন লিখ যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

// Write a function that takes any name as uppercase or regular case and returns the name as lowercase as output.
function makeToLowerCase(string){
    const lowerCaseStrings = string.toLowerCase();
    return lowerCaseStrings;
}
const myStrings = "My Name Is Jubair";
const results = makeToLowerCase(myStrings);
console.log(results);