// Array find leapYear 
function findLeapYear(year){
    const leapYears = [];
    for(let i = 0; i< year.length; i++){
        const index = i;
        const leapYear = year[index];
        if(leapYear % 4 === 0){
            leapYears.push(leapYear);
        }
    }
    return leapYears;
}
const inputArray = [2023, 2024, 2025, 2028, 2030];
const leapYears = findLeapYear(inputArray);
console.log(leapYears);