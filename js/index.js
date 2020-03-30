// Iteration 1: Names and Input
console.log(`i'm ready`);

const hacker1 = "Matt";
console.log("the driver name is: " + hacker1);

const hacker2 = "Marianna";
console.log("the navigator name is: " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    "What?! You both have the same name? They both have " +
      hacker1.length +
      "number of characters"
  );
}

// Iteration 3: Loops
for (var i = 0; i < hacker1.length; i++) {
  var hacker3 = hacker1.toUpperCase(i).split("");
  console.log(hacker3);
}

for (var i = hacker2.length - 1; i >= 0; i--) {
  var hacker3 = hacker2[i];
  console.log(hacker3);
}

//MISSING 3rd LOOP, COULDN'T WORK IT OUT :)

// Bonus 1

const sentence =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let frase = sentence.split(" ");
console.log(frase.length);

let counter = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i].toLowerCase() === "et") counter++;
}
console.log(counter);

//bonus 2

let phraseToCheck = "Roma, amor";
let phraseClean = phraseToCheck.replace(/ |,|!/g, "");
let pali = "";

for (let i = phraseClean.length - 1; i >= 0; i--) {
  pali += phraseClean.charAt(i);
}
if (phraseClean.toLowerCase() === pali.toLowerCase()) {
  console.log("Son palindromos");
} else {
  console.log("No son palindromos");
}
