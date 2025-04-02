// Iteration 1: Names and Input
const hacker1 = "Pedram";
const hacker2 = "Yunus";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, You both have equally long names, ${hacker1.length} characters.`
  );
}

// Iteration 3: Loops
let letters1 = "";
let letters2 = "";

for (let i = 0; i < hacker1.length; i++) {
  letters1 += hacker1[i].toUpperCase() + " ";
}
console.log(letters1);

for (i = hacker2.length - 1; i >= 0; i--) {
  letters2 += hacker2[i].toLowerCase();
}
console.log(letters2);

// Bonus 1

const longText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis sem, venenatis a sem quis, maximus urna. Maecenas in hendrerit est. Sed non lacus libero. Praesent lacinia, elit in tempus volutpat, sapien magna lacinia, at elementum quam diam non ante. 

  Curabitur eget ante ultrices, volutpat diam nec, eleifend tellus. Integer non urna ullamcorper, volutpat sed, ultricies dui. Nam viverra elit in ultricies. Aliquam sagittis lorem nec bibendum congue. Etiam vel mauris lectus. Morbi tincidunt, velit eget imperdiet rutrum, massa felis venenatis lorem, ut consectetur ligula odio vitae libero. 

  Ut porta, libero non consectetur vehicula, massa arcu semper nisl, in porttitor ligulaet orci quis lectus. Maecenas tincidunt metus at nulla fringilla pulvinar. Maecenas quis tincidunt elit. Mauris eget tellus consectetur, ultrices eros ac, sagitti.
`;

const countWords = longText.split(" ");
console.log("Number of words:", countWords.length);

let countEt = 0;

for (let word of countWords) {
  if (word.toLowerCase().includes("et")) {
    countEt++;
  }
}

console.log("Number of occurrences of 'et':", countEt);

// Bonus 2
let phraseToCheck = "No 'x' in Nixon";
let purePhrase = "";
let purePhraseReversed = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] === " " ||
    phraseToCheck[i] === "," ||
    phraseToCheck[i] === "!" ||
    phraseToCheck[i] === "'" ||
    phraseToCheck[i] === "."
  ) {
    continue;
  } else {
    purePhrase += phraseToCheck[i].toLowerCase();
  }
}

for (let i = purePhrase.length - 1; i >= 0; i--) {
  purePhraseReversed += purePhrase[i];
}

if (purePhrase === purePhraseReversed) {
  console.log("The phrase is a palindrome.");
} else {
  console.log("The phrase is not a palindrome.");
}
