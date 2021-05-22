// Iteration 1: Names and Input
let hacker1 = "Ana";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bob";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let capitalsDriver = ""
for (let i = 0; i < hacker1.length; i++) {
  if (i == hacker1.length - 1) {
    capitalsDriver += hacker1[i]; 
  } else {
    capitalsDriver += hacker1[i] + " ";
  }
}
console.log(capitalsDriver.toUpperCase()); 

let lettersNavigator = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  lettersNavigator += hacker2[i];
}
console.log(lettersNavigator);

if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) == 0) {
  console.log("What?! You both have the same name?")
}