// Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops

console.log("I'm ready");
let hacker1 = "Ciwan";
console.log("The driver's name is " + hacker1);
let hacker2 = "Vasiliki";
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has" + hacker1.length + " charechters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you have both equally long names, " + hacker1.length + " characters!"
  );
}

let hacker1Name = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Name += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1Name);
let hacker2Name = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  hacker2Name += hacker2[j];
}
console.log(hacker2Name);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver´s name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
