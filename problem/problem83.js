// Problem======3

/* function sortMaker(arr) {
  const [first, second] = arr;
  if (first < 0 || second < 0) {
    return "invalid";
  } else if (first === second) {
    return "equal";
  } else if (first > second) {
    return [first, second];
  } else {
    return [second, first];
  }
}
const array = [2, 2];
const sort = sortMaker(array);
console.log(sort); */

//   or
function sortMaker(arr){
    if(arr[0] < arr[1]){
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    return arr;
}
const myArray = [2, 3];
const finalArray = sortMaker(myArray);
console.log(finalArray);