// Iteration 1: Names and Input

let hacker1 = "Mari Carmen";
let hacker2 = "Mari Jose";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
  console.log(
    "The driver has the longest name, it has : " +
      hacker1.length +
      " characters"
  );
else if (hacker1.length < hacker2.length)
  console.log(
    "The navigator has the longest name, it has : " +
      hacker2.length +
      " characters"
  );
else
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );

// Iteration 3: Loops
let hacker1UpperCase = hacker1.toUpperCase();

let hacker1UpperCaseSpaced = "";
for (i = 0; i < hacker1UpperCase.length; i++) {
  hacker1UpperCaseSpaced += hacker1UpperCase[i] + " ";
}

console.log("Spaced: " + hacker1UpperCaseSpaced);

let reverseHacker1UpperCaseSpaced = "";

for (i = hacker1UpperCaseSpaced.length - 1; i >= 0; i--) {
  reverseHacker1UpperCaseSpaced += hacker1UpperCaseSpaced[i];
}

console.log("\nReverse: " + reverseHacker1UpperCaseSpaced);

// 3.3

// Make sure which is the longer string

let longString = 0;
if (hacker1.length >= hacker2.length) longString = hacker1.length;
else longString = hacker2.length;

//if not the same, enter loop and compare as many times as the longer string

if (hacker1 != hacker2) {
  for (i = 0; i < longString; i++) {
    if (hacker1[i] > hacker2[i]) {
      console.log("Yo, the navigator name goes first definetly");
      break;
    } else if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first");
      break;
    }
    //check null in case we compare Mari and Marijane , we assume Mari would go first
    if (hacker1[i] == null) {
      console.log("The driver's name goes first");
      break;
    } else if (hacker2[i] == null) {
      console.log("Yo, the navigator name goes first definetly");
      break;
    }
  }
} else console.log("What?! You both have the same name");
