// Iteration 1: Names and Input

let hacker1 = "Kevin";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Sara";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let diferent;

if (hacker1.length > hacker2.length) {
  diferent = hacker1.length - hacker2.length;
  console.log(
    `The driver has the longest name, it has ${diferent} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  diferent = hacker2.length - hacker1.length;
  console.log(
    `It seems that the navigator has the longest name, it has ${diferent} characters.`
  );
} else {
  diferent = hacker1.length - hacker2.length;
  console.log(`Wow, you both have equally long names, ${diferent} characters!`);
}

// Iteration 3: Loops

let separateName = "";
for (let i = 0; i < hacker1.length; i++) {
  separateName += hacker1[i] + " ";
}

console.log(separateName.toUpperCase());

let reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}

console.log(reverse);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: Loops

const longText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";

let count = 0;
let position = 0;

while (longText.includes("et", position)) {
  count++;
  position = longText.indexOf("et", position) + 1;
}
console.log(count);


// Bonus 2: Loops

const phraseToCheck = "Amor, Roma";

const cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "");

let reversePhrase = "";
for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
  reversePhrase += cleanedPhrase[i];
}

if (cleanedPhrase == reversePhrase) {
  console.log(`${phraseToCheck} is a palindrome`);
} else {
  console.log(`${phraseToCheck} is not a palindrome`);
}
