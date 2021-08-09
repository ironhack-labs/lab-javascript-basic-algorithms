// Iteration 1: Names and Input
let hacker1 = "Caner";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Rahaf";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// Driver name separation
console.log(hacker1)
let upperCased = "";
let reversed = "";

for (let i = 0; i < hacker1.length; i++) {
 upperCased = hacker1.toUpperCase().split("").join(" ");
}
console.log(upperCased);

// Navigator name reverse

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed);

// Ordering by alphabet

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both have the same name?");
}


// BONUS TIME

// BONUS 1

