// // Iteration 1: Names and Input
const hacker1 = "Stephanie";
const hacker2 = "Gabriel";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// // Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters. `
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters. `
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// // Iteration 3: Loops
let newName = "";
for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase() + " ";
}
console.log(newName);
newName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newName += hacker2[i];
}
console.log(newName);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus1
let paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nulla expedita cum nobis nostrum exercitationem sed facilis maxime impedit unde. Veniam quo, magnam nemo nostrum ipsam voluptate. Ab, corrupti et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis autem dolores temporibus iusto delectus dolorem porro praesentium! Nihil facilis quas laudantium blanditiis doloremque ex eveniet facere error cupiditate dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam aut ipsa, corrupti fuga sed nulla laudantium laborum doloremque tenetur, accusamus commodi voluptatibus dolore repellat dolorem libero optio, quos delectus.";
let char;
let counter = 0;
for (let i = 0; i < paragraph.length; i++) {
  char = paragraph[i];
  if (char === " " || char === ".") {
    counter++;
  }
}
console.log(counter);

// Bonus2
// const phraseToCheck = "racecar";
// counter = 0;
// for (let i = 0; i < phraseToCheck.length; i++) {
//   const charFromLeft = phraseToCheck[i].toLowerCase();
//   const charFromRight =
//     phraseToCheck[phraseToCheck.length - 1 - i].toLowerCase();
//   console.log(`${charFromLeft} - ${charFromRight}`);

//   if (charFromLeft === charFromRight) {
//     counter++;
//   }
// }
// if (counter === phraseToCheck.length) {
//   console.log("Palindrome found");
// } else {
//   console.log("Not a Palindrome. Try again.");
// }

let phraseToCheck = "Amor, Roma";
let straightPhrase = "";
let reversedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  const char = phraseToCheck[i];
  if (char === " " || char === ",") {
    continue;
  }
  straightPhrase += char.toLowerCase();
}

for (let j = phraseToCheck.length - 1; j >= 0; j--) {
  const char = phraseToCheck[j];
  if (char === " " || char === ",") {
    continue;
  }
  reversedPhrase += char.toLowerCase();
}

if (straightPhrase === reversedPhrase) {
  console.log("It's a palindrome!");
} else {
  console.log("Not a palindrome. Try again.");
}
