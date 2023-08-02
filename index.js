// Iteration 1: Names and Input
const hacker1 = "Kim";
const hacker2 = "Jorge";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
let hacker1Length = hacker1.length; // 3
let hacker2Length = hacker2.length; // 5

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker1Length < hacker2Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
    console.log(
        `Wow, you both have equally long names, ${hacker2Length} characters!`
      );
}

// Iteration 3.1: Loops
for (i = 0; i < hacker1Length; i++) {
    console.log(hacker1[i].toUpperCase() + " ");
}

// Iteration 3.2: Loops
for (i = hacker2Length - 1; i >= 0; i--) {
    const character = hacker2[i];
    console.log(character);
}

// Iteration 3.3: Loops
let namesToSort = [hacker1, hacker2];
let sortedNames = namesToSort.sort();

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (hacker1 === sortedNames[0]) {
  console.log("The driver's name goes first.");
} else if (hacker2 === sortedNames[0]) {
  console.log("Yo, the navigator goes first, definitely.");
}
// We made this first without a loop, step by step, 
// and we figured out it already works like this so 
// we're not sure how, and why, to make a loop out of this.
