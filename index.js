console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Margarida";
console.log (`The driver's name is ${hacker1}`);

let hacker2 = "Guilherme";
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters. `);
  } else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Iteration 3: Loops

let hacker1Name = "";
  for (let i = 0; i <= hacker1.length - 1; i++) {
   hacker1Name = hacker1Name + " " + hacker1[i];
  }
   console.log (hacker1Name.toUpperCase());

let reverseHacker2Index = hacker2.length - 1;7
let reversedName = "";
for (let j = reverseHacker2Index; j >= 0; j--) {
 reversedName = reversedName + hacker2[j];
}
console.log (reversedName);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log ("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log ("Yo, the navigator goes first, definitely.")
} else {
  console.log ("What?! You both have the name?");
}
