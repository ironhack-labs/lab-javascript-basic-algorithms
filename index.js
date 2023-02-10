// Iteration 1: Names and Input
const hacker1 = "Philipp Goetz";
console.log(`the driver's name is ${hacker1}`);

const hacker2 = "Marvin Gimbel";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.lenght > hacker2.lenght) {
  console.log(`The driver has the longest name, it has ${hacker1.lenght} characters.`);
}
else if (hacker2.lenght > hacker1.lenght) {
  console.log(`Ìt seems that the navigator has the longest name,it has ${hacker2.lenght} characters.`);
}
else {
console.log(`Wow, you both have equally long names, ${hacker1.lenght} characters`);
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(""));
console.log(hacker2.split("").reverse().join(""));

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
}
else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitly");
}
else {
  console.log("What?! You both have the same name?");
}