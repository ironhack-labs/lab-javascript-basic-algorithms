// Iteration 1: Names and Input
console.log("I´m ready");

let hacker1 = "Igna";

console.log("The driver´s name is " + hacker1);

let hacker2 = "Pepe";

console.log("The navigator´s name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name " +
      hacker2.length +
      " characters"
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters"
  );
}

// Iteration 3: Loops
/*Print all the characters of the driver's name, separated by a space and in 
capitals i.e. "J O H N" */
let spaceCapital = "";

for (let i = 0; i < hacker1.length; i++) {
  spaceCapital += hacker1[i].toUpperCase() + " ";
}
console.log(spaceCapital.trimRight());

//Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverseOrder = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseOrder += hacker2[i];
}
console.log(reverseOrder);

//Lexicographic order:
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
}
