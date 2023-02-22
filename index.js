// Iteration 1: Names and Input

const hacker1 = "Bartosz";
const hacker2 = "Peter";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops

let extendedName = "";
for (const char of hacker1) {
  console.log(char);
  extendedName = extendedName + char + " ";
}
console.log(extendedName.toUpperCase());

let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  hacker2Reversed += char;
}
console.log(hacker2Reversed);

switch (hacker1.localeCompare(hacker2)) {
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  default:
    console.log("What?! You both have the same name?");
}

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim lorem vitae ipsum pretium, vel egestas lacus interdum. Proin sodales velit sit amet enim egestas eleifend. Mauris id cursus magna, in scelerisque tellus. Sed in magna eros. Mauris turpis leo, egestas vel pulvinar sed, placerat eu ex. Praesent commodo diam ultricies velit sodales congue ac et dui. Nullam efficitur, lacus sit amet vestibulum porta, orci ante rutrum augue, in dapibus tellus diam fermentum leo. Etiam tempus egestas felis sed elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus aliquet eu diam sit amet scelerisque. Nunc finibus vel nulla eget rutrum. Maecenas at rhoncus orci. Suspendisse ultricies velit quis est elementum mollis. Cras egestas neque in posuere fringilla. Aliquam iaculis id ligula sed mattis.

Vivamus eleifend iaculis consectetur. Etiam a nunc eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer auctor at orci sed mattis. Proin ut lectus tempor, consectetur justo vel, dictum tellus. Donec tempus, metus quis semper pretium, justo nisl rhoncus ex, sed molestie leo augue id mi. In commodo lacus id egestas auctor. Sed lacinia leo ac tempor aliquet. Sed sed condimentum ligula, tempor feugiat sem. Aenean ultricies varius hendrerit. Sed odio tortor, sollicitudin vitae tempus id, aliquam sed tortor. Mauris vestibulum mauris massa, ut posuere lacus vehicula quis.

Etiam in bibendum nibh, placerat maximus diam. Aliquam tincidunt bibendum sollicitudin. Nunc neque diam, commodo quis magna a, mollis vulputate ligula. Nullam rutrum, massa vitae lacinia ultrices, purus augue tincidunt lacus, in consequat justo dolor ut est. Duis in gravida ipsum. Duis rutrum velit et ante semper suscipit. Nam iaculis accumsan convallis. Phasellus fringilla luctus sem ac suscipit. Nunc at justo magna. Vivamus porttitor placerat neque, nec rhoncus risus eleifend vel. In elementum tellus hendrerit facilisis tempor. Integer vulputate enim sit amet tincidunt ultrices. Fusce feugiat rutrum auctor. Mauris fermentum pharetra mi at pharetra.`;

let arrayOfWords = longText.split(" ");
console.log(`The text contains ${arrayOfWords.length} words!`);

let matchCounter = 0;

for (let i = 0; i < arrayOfWords.length; i++) {
  if (arrayOfWords[i] === "et" || arrayOfWords[i] === "Et") {
    matchCounter++;
  }
}

console.log(`Found "et" ${matchCounter} times.`);

// Bonus 2

let phraseToCheck = "race car";

function palindromChecker(phrase) {
  let altPhrase = phrase;
  let reversePhrase = "";
  const nonChars = [" ", ".", "!", "?", ",", ";", ":"];

  for (let i = 0; i < nonChars.length; i++) {
    altPhrase = altPhrase.replaceAll(nonChars[i], "");
  }

  altPhrase = altPhrase.toLowerCase();

  for (let i = altPhrase.length - 1; i >= 0; i--) {
    const char = altPhrase[i];
    reversePhrase += char;
  }

  console.log(reversePhrase);

  if (altPhrase === reversePhrase) {
    console.log(`"${phrase}" is a palindrome!`);
  } else {
    console.log(`"${phrase}" is not a palindrome!`);
  }
}

const testPhrases = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "Bartosz",
  "stack cats",
  "step on no pets",
  "Pete",
  "taco cat",
  "put it up",
  "foobar",
];

for (let i = 0; i < testPhrases.length; i++) {
  palindromChecker(testPhrases[i]);
}
