// Iteration 1: Names and Input
const hacker1 = "Tomás"
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Éric"
console.log(`The navigator's name is ${hacker2}`);
const hacker3 = "Roxana"
console.log(`The navigator's name is ${hacker3}`);


// Iteration 2: Conditionals
let longestName 

if (hacker1.length > hacker2.length && hacker1.length > hacker3.length ) {
    longestName = hacker1

} else if(hacker2.length > hacker1.length && hacker2.length > hacker3.length ){
    longestName = hacker2
} else (longestName = hacker3)

if(longestName === hacker1){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if(longestName === hacker2){
    console.log(`It seems that the navigator1 has the longest name, it has ${hacker2.length} characters.`);

} else if(longestName === hacker3){
    console.log(`It seems that the navigator2 has the longest name, it has ${hacker3.length} characters.`);

} else{console.log(`wow, you all have equally longs names, ${hacker1.length} characters. `)}




// Iteration 3: Loops
let driverSpelled = ""

for (i = 0; i < hacker1.length; i++){
    driverSpelled += hacker1[i].toUpperCase() + " ";
}

console.log(driverSpelled);

let navigator1Reverse = ""
for (i = hacker2.length -1; i >=0; i--){
    navigator1Reverse +=hacker2[i];
    
}
console.log(navigator1Reverse);

let navigator2Reverse = ""
for (i = hacker3.length -1; i >=0; i--){
    navigator2Reverse +=hacker3[i];
    
}
console.log(navigator2Reverse);



console.log(hacker1.localeCompare(hacker2));

if (hacker1.localeCompare(hacker2) === (-1)){
    console.log("the driver's name goes first.");
    
} else if (hacker1.localeCompare(hacker2) === (1) ){
    console.log("Yo the navigator goes first definitely")

    
}else {console.log("What?! you bouth have the same name?");
}
