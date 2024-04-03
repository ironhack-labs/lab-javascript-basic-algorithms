// Iteration 1: Names and Input

let hacker1 = "Magda";
let hacker2 = "Daniela";
console.log(`The driver’s name is ${hacker1}.`);
console.log(`The driver’s name is ${hacker2}.`);


// Iteration 2: Conditionals

const driverLength = hacker1.length;
const navigatorLength = hacker2.length;
    if (driverLength > navigatorLength) {
    console.log(`The driver has the longest name, it has ${driverLength} characters.`);
    } else if (navigatorLength > driverLength) {
       console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
     } else {
         console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
     }


// Iteration 3: Loops

let nameUpperC="";
for (let i = 0; i < driverLength; i++) {
   nameUpperC += hacker1[i];
}
console.log(nameUpperC);
16h55
console.log(nameUpperC.toUpperCase());
16h56
let nameUpperC="";
for (let i = 0; i < driverLength; i++) {
   nameUpperC += hacker1[i] + " ";
}
console.log(nameUpperC.toUpperCase());
















