// Iteration 1: Names and Input
const hacker1 = "Rui"
console.log(`The driver's name is ${hacker1}`)
//-------Iteration 1----------     
const hacker1 = "Rui";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Miguel";
console.log(`The navigator name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`)
  }

// Iteration 3: Loops
let driverName = "";
for(i=0; i<hacker1.length; i++){
  driverName += hacker1.charAt(i) + ' ';
}
console.log(driverName.toUpperCase());

let navigatorName = "";
for (i = 5; i >= 0; i--){
  navigatorName += hacker2[i] ;
}
console.log (navigatorName);

if (hacker1.localeCompare(hacker2) < 0 ) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) > 0 ) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}