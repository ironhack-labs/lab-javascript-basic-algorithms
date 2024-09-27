// Iteration 1: Names and Input
const hacker1 = "Candela";
const hacker2 = "Alejandro"

console.log(`The driver´s name is ${hacker1}`);
console.log(`The driver´s name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
console.log(hacker1.split(""));

let upperName = "";
for (let i = 0; i < hacker1.length; i++) {
    const letter = hacker1[i].toUpperCase();
    upperName = upperName + " " + letter
}
console.log(upperName)

const lastIndex = hacker1.length - 1; 

let char = ""; 
for (let i = lastIndex; i >= 0; i--) {
  char += hacker1[i].toUpperCase(); 
  console.log(char); 
}


if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
