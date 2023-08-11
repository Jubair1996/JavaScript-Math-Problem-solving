// Problem======2

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please provide valid inputs";
  }
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}
const firstString = "JavaScript";
const secondString = "Code";
const result = matchFinder(firstString, secondString);
console.log(result);
