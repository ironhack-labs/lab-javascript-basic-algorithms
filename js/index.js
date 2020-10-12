// Iteration 1: Names and Input
let hacker1 = "Mafalda";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Andre";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker2.length < hacker1.length) {
  console.log(` The driver has the longest name, it has ${hacker1.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops

let space = "";
for (let i=0; i <hacker1.length; i++) {
  space += hacker1[i].toUpperCase() + " ";
}
console.log(space);



let spaceTwo = "";
for (i=hacker2.length-1; i>=0; i--) {
  spaceTwo += hacker2[i];
}
console.log(spaceTwo);

let varOne = hacker1.charAt(0);
let varTwo = hacker2.charAt(0);

if (varOne === varTwo) {
  console.log("What?! You both have the same name?");
} else if (varOne > varTwo) {
  console.log(" Yo, the navigator goes first definitely.");
} else {
  console.log("The driver's name goes first.");
}