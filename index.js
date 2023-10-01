// Iteration 1: Names and Input
const hacker1 = "Hector";
const hacker2 = "Alonso";
let capitalizedName = "";
let reversedName = "";
const longText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and q scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, er and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let wordCounter = 0;
let etCounter = 0;

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters `
  );
} else {
  console.log(
    `ow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i + 1] !== undefined) {
    capitalizedName += hacker1[i].toUpperCase() + " ";
  } else {
    capitalizedName += hacker1[i].toUpperCase();
  }
}
console.log(capitalizedName);

for (let j = hacker2.length - 1; j >= 0; j--) {
  reversedName += hacker2[j];
}
console.log(reversedName);

if (hacker1.localeCompare(hacker2) > 0) {
  console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}

for (let k = 0; k < longText.length; k++) {
  if (
    (longText[k + 1] === " " && longText[k] !== " ") ||
    (longText[k] === "." && longText[k + 1] !== " ")
  ) {
    wordCounter++;
  }
  if (longText[k] == "e" && longText[k + 1] === "t") {
    etCounter++;
  }
}
console.log(`The number of words in this text is ${wordCounter}`);
console.log(`The number of "et" that exist in this text is ${etCounter}`);

let phraseToCheck = `Was it a car or a cat I saw?" and "No 'x' in Nixon"`;
const toRemove = / |[^a-zA-Z0-9 ]/g;
let reversedPhrase = "";

const removedPhrase = phraseToCheck.replace(toRemove, "").toLowerCase();

for (let l = removedPhrase.length - 1; l >= 0; l--) {
  reversedPhrase += removedPhrase[l];
}
if (reversedPhrase === removedPhrase) {
  console.log(`The phrase ("${phraseToCheck}") is a palindrome`);
} else {
  console.log(`The phrase ("${phraseToCheck}") is not a palindrome`);
}
