console.log("I'm ready!");
// Iteration 1: Names and Input

const hacker1 = 'Alejandro';
const hacker2 = 'Naiim';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

let hacker1WithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1WithSpaces += hacker1[i].toUpperCase();

  if (i !== hacker1.length - 1) {
    hacker1WithSpaces += " ";
  }
}
console.log(hacker1WithSpaces);

let reversedHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedHacker2 += hacker2[i];
}
console.log(reversedHacker2);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1:

const longText = "Morbi commodo, nunc sit amet finibus vestibulum, leo est egestas nulla, et congue dolor mauris et metus. Integer dignissim massa sed ex laoreet commodo. Proin vitae ullamcorper mi. In hac habitasse platea dictumst. Donec tincidunt justo in lacus sollicitudin, non laoreet justo maximus. Ut venenatis eleifend bibendum. Sed cursus tempor elit, ac sollicitudin ex congue sit amet. Maecenas arcu eros, porta tincidunt diam ac, sollicitudin mollis mauris. Duis dui diam, aliquet nec metus in, pretium euismod arcu.In scelerisque neque ut lorem cursus sollicitudin. In feugiat condimentum eros, nec consectetur erat egestas at. Sed at tortor et orci feugiat posuere eget in tortor. Vestibulum congue libero et odio rutrum, et pharetra orci porta. Ut nec dolor nec arcu aliquam ullamcorper non nec massa. Donec nec vulputate est. Nulla in diam vestibulum, tempor lorem eu, iaculis purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eu elementum purus. Duis vehicula auctor urna a accumsan. Phasellus eget est sollicitudin orci posuere rhoncus quis eu augue. In purus orci, lobortis eu lorem tincidunt, efficitur aliquet risus.Suspendisse dapibus, leo in congue rhoncus, libero libero porttitor lectus, non vestibulum lorem nibh vitae libero. Cras enim ex, finibus ut laoreet a, bibendum id turpis. Ut imperdiet lacus non ex pulvinar commodo. Duis vulputate, tellus quis imperdiet pulvinar, ligula dui venenatis leo, semper scelerisque nunc lectus at lectus. Donec ut dui in purus eleifend pulvinar sit amet eget nunc. Vestibulum sit amet euismod leo, vel tempor felis. Suspendisse potenti. Pellentesque laoreet, leo tempor varius suscipit, tellus nisl ultricies quam, nec faucibus nisi est quis ipsum. Mauris aliquet ex eget vulputate fermentum."

let numWords = 0, numEt = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    numWords++;
  }
  if (longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3] === " et ") {
    numEt++
  }
}

console.log(`The text has ${numWords} words, and the latin word "et" appears ${numEt} times`)

// Bonus 2:

const phraseToCheck = "amo la paloma"
let reversedPhrase = "", cleanPhrase = "";

for (let i = 0, j = phraseToCheck.length - 1; i < phraseToCheck.length; i++, j--) {
  const char = phraseToCheck[i].toLowerCase(), reverseChar = phraseToCheck[j].toLowerCase();
  if (char >= "a" && char <= "z") {
    cleanPhrase += char;
  }
  if (reverseChar >= "a" && reverseChar <= "z") {
    reversedPhrase += reverseChar;
  }
}

if (reversedPhrase === cleanPhrase) {
  console.log(`"${phraseToCheck}" is a Palindrome`);
} else {
  console.log(`"${phraseToCheck}" is not a Palindrome`);
}
