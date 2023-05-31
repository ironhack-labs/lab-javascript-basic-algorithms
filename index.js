// Iteration 1: Names and Input
/*teration 1: Names and Input
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".*/

/*const hacker1 = "John Doe";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Louro Jose";
console.log(`The navigator's name is ${hacker2}.`);*/

// Iteration 2: Conditionals
/*const hacker1 = "John Doe";
const hacker2 = "Louro Jose";

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}*/

// Iteration 3: Loops

//Ste 3.1

/*let hacker1Characters = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Characters += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1Characters.trim());*/

// Step 3.2

/*const hacker2 = "Louro Jose";

let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}

console.log(reverseName);*/

//Step 3.3

const hacker1 = "John Doe";
const hacker2 = "Louro Jose";

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
