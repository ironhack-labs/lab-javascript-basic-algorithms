// Iteration 1: Names and Input

const hacker1 = "Frodo";
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Sam";
console.log("The driver's name is " + hacker2)

// Iteration 2: Conditionals

const driver = "Ash";
const navigator = "Pikachu";

if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`);
} else if (driver.length < navigator.length) { 
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`) 
} else if (driver.length === navigator.length) {
    console.log(`Wow, you both have equally long names, ${navigator.length} characters!.`);
}

// Iteration 3: Loops

const driver2 = "Luffy";
const navigator2 = "Nami";
let capitalized = "";
let backwards = "";

for (let i = 0; i < driver2.length; i++) {
    capitalized += driver2[i].toUpperCase() + " ";
}
console.log(capitalized);

for (let j = navigator2.length - 1; j >= 0; j--) {
    backwards += navigator2[j];
}
console.log(backwards);

if (capitalized.localeCompare(backwards) < 0) {
    console.log("The driver's name goes first.");
  } else if (capitalized.localeCompare(backwards) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
}