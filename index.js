// Iteration 1: Names and Input
const hacker1 = "Lucia";
const hacker2 = "Laia";
console.log("The driver's name is " +  hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if(hacker1Length > hacker2Length){
 console.log(`The driver has the longest name, it has ${hacker1Length} characters.`); 
}
  else if (hacker1Length < hacker2Length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
  }
else{
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}

// Iteration 3: Loops
let driverUpper = "";

for (let i = 0; i < hacker1Length; i++) {
  const char = hacker1[i].toUpperCase();
  driverUpper += char + " ";
}
console.log(driverUpper);

let navigatorReverse = "";

for (let i = hacker2Length - 1; i >= 0; i--) {
  const char = hacker2[i];
  navigatorReverse += char;
}
console.log(navigatorReverse)

const order = hacker1.localeCompare(hacker2);

if (order === -1) {
  console.log("The driver's name goes first.")
}
else if (order === 1) {
  console.log("Yo, the navigator goes first, definitely.")
}
else {
  console.log("What?! You both have the same name?")
}





