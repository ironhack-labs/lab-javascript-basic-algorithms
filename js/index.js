// Iteration 1: Names and Input
const hacker1 = "Jan";
console.log(`The driver's name is ${hacker1}.`)
const hacker2 = "Facundo";
console.log(`The navigator's name is ${hacker2}.`)
// Iteration 2: Conditionals
const driver = hacker1.length;
const navigator = hacker2.length;
if (driver > navigator) 
{
console.log(`The driver has the longer name. It has ${driver} charachters.`);
}
else if (navigator > driver) {
console.log(`The navigator has the longer name. It has ${navigator} charachters.`);
}
else {
console.log(`Wow, both have equally long names with ${driver} charachters!`);
}
// Iteration 3: Loops
let driverCapitalized = hacker1.toUpperCase();
let driversNameCapital = "";
for (let i = 0; i<driverCapitalized.length; i++) {
driversNameCapital += driverCapitalized[i] +" ";
}
driversNameCapital = driversNameCapital.slice(0,driversNameCapital.length-1,);


let navigatorsNameReversed = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  navigatorsNameReversed += hacker2[i];
};
console.log(navigatorsNameReversed);

/* compare lexografically?? */
let order = hacker1.localeCompare(hacker2);
console.log(order);
switch (order) {
  case 0:
  console.log("You both have the same name!!");
  break;
  case 1:
  console.log("The navigator's name goes first.");
  break;
  case -1:
  console.log("The driver's name goes first.");
  break;
}