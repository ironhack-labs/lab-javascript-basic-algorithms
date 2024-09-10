// Iteration 1: Names and Input
let hacker1 = "Ingrid";
console.log ("The driver's name is", hacker1);

let hacker2 = "Ania"
console.log ("The navigator's name is", hacker2)


// Iteration 2: Conditionals
let driver = hacker1.length
let navigator = hacker2.length

console.log (driver)
console.log (navigator)

if (driver > navigator) {
    console.log("The driver has the longest name, it has " + driver + " characters.");
  } else if (driver < navigator) {
    console.log("It seems that the navigator has the longest name, it has " + navigator + " characters.");
  } else {
    console.log("Wow, you both have equally long names, " + driver + " characters!");
  }
 
// Iteration 3: Loops

let driverName = hacker1; 
let nameSeparated = driverName.toUpperCase().split('').join('  ');

console.log(nameSeparated);

let navigatorName = hacker2;
let nameReverse = "";


for (let i = navigatorName.length - 1; i >= 0; i--) {
    nameReverse += navigatorName[i]; 
}
  
  console.log(nameReverse);




let result = hacker1.localeCompare(hacker2);
if (result < 0) {
    console.log(`The driver's name goes first`);
  } else if (result > 0) {
    console.log(`Yo, the navigator goes first, definitely`);
  } else {
    console.log(`What?! You both have the same name?`);
  }
