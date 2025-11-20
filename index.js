// Iteration 1: Names and Input
const hacker1 = "BarabasA";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Baraba";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops
let spacdeName = "";
for (let i = 0; i < hacker1.length; i++) {
  eachCharacters += (hacker1[i] + " ").toUpperCase();
}
console.log(spacdeName);

// 3.2:
let reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed +=  hacker2[i];
}
console.log("hooo", reversed);

// 3.3: Lexicographic order comparison (manual loop solution)
let result = "";
for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
  if (hacker1[i] < hacker2[i]) {
    result = "The driver's name goes first.";
    break;
  } else if (hacker1[i] > hacker2[i]) {
    result = "Yo, the navigator goes first, definitely.";
    break;
  }
}

// If all compared characters are equal, check string lengths
if (result === "") {
  if (hacker1.length < hacker2.length) {
    result = "The driver's name goes first.";
  } else if (hacker1 > hacker2.length) {
    result = "Yo, the navigator goes first, definitely.";
  } else {
    result = "What?! You both have the same name?";
  }
}

console.log("Our result", result);

// Alternative solution using localeCompare() method
if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`${hacker1} The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`${hacker2} Yo, the navigator goes first, definitely.`);
} else {
  console.log("What?! You both have the same name?");
}
