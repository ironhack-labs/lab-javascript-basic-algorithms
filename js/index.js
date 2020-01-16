// ITERATION 1

let hacker1 = "Manolo";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Chrome";

console.log(`The navigator's name is ${hacker2}`);

// ITERATION 2

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names,${hacker2.length} characters!`
  );
}

// ITERATION 3

let shift = hacker1.toUpperCase();
let space = ``;
let reverseName = ``;

for (i = 0; i < hacker1.length; i++) {
  space += `${shift[i]} `;
}

console.log(shift);

console.log(space);

for (i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}

console.log(reverseName);

// ITERATION 4

if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely");
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS 1

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function programCount(text) {
  return text.split(" ").length;
}
let textNoSpace = programCount(lorem);

console.log(`Lorem tiene ${textNoSpace} caracteres`);

let count = 0;

for (let i = 0; i < lorem.length; i++) {
  if (lorem.charAt(i).toLowerCase() == "e" && lorem.charAt(i + 1) == "t") {
    count++;
  }
}
console.log(`Aparece la palabra "et" ${count} veces`);

// BONUS 2

let phraseToCheck = prompt("añada aquí su frase");
let phraseLower = phraseToCheck.toLowerCase();
let phraseNoSpace = phraseLower.replace(/ /g, "").replace(/,/g, "");
let total = phraseNoSpace.length;
let phraseRow = "";

for (i = total - 1; i >= 0; i--) {
  phraseRow += phraseNoSpace[i];
}

if (phraseRow === phraseNoSpace) {
  console.log("tu frase es un palindromo");
} else if (phraseRow != phraseNoSpace) {
  console.log("tu frase NO es un palindromo");
}
