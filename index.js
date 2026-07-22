// Iteration 1: Names and Input

const hacker1 = "Anna";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Leo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`,
  );
}

// Iteration 3: Loops

let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else {
  console.log("Yo, the navigator goes first, definitely.");
}

// Bonus

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.

Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est laborum.`;

console.log(longText);

let wordCounting = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCounting++;
  }
}
wordCounting++;
console.log(wordCounting);
