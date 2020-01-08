// Iteration 1: Names and Input
let hacker1 = "Jacky";
console.log("The driver's name is " + hacker1);

let hacker2 = "Magellan";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1 === hacker2) {
    console.log("Wow, you both have equally long names, " + hacker1.length + "characters!.");
  } else if (hacker1 > hacker2) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
  } else {
    console.log("It seems that the navigator has the longest name, " + hacker2.length + " characters.")
  }

// Iteration 3: Loops
let newWork = "";
for (let i = 0; i<hacker1.length; i++) {
  if(i == hacker1.length - 1) {
    newWork += hacker1.toUpperCase().charAt(i);  
  } else {
    newWork += hacker1.toUpperCase().charAt(i) + " ";
  } 
}
console.log(newWork);

//Iteration 3.2

let reverseName = hacker2.split("").reverse().join("");
console.log(reverseName);

//Iteration 3.3
if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
