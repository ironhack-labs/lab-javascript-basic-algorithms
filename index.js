// Iteration 1: Names and Input
const hacker1 = "Jess";
const message1 = `The driver's name is ${hacker1}`;
console.log(message1);

const hacker2 = "Ben";
const message2 = `The navigator's name is ${hacker2}`;
console.log(message2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker2.length > hacker1.lenght){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
let capitalSpacedDriverName = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalSpacedDriverName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalSpacedDriverName);


let reversedNavigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigatorName += hacker2[i];
}
console.log(reversedNavigatorName);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}