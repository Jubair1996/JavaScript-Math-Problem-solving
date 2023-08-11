//Remove duplicate value of an array

function duplicateNames(names){
    let unique = [];
    for(let i = 0; i < names.length; i++){
     const name = names[i];
     if(unique.includes(name) === false){
         unique.push(name);
     }
    }
    return unique;
 }
 const names = ["abul", "babul", "cabul", "cabul", "gabul", "abul","babul","cabul", "gabul"];
 const removeElement = duplicateNames(names);
 console.log(removeElement); 