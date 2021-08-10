// Iteration 1: Names and Input

const hacker1 = "Link";
const hacker2 = "Zelda";

const driverName = `The driver's name is ${hacker1}.`;
const navName = `The navigator's name is ${hacker2}.`;

console.log(" ");
console.log("--- Iteration 1: Names and Input ---");
console.log(" ");

console.log(driverName);
console.log(navName);

// Iteration 2: Conditionals

const equal = `Wow, you both have equally long names, ${hacker1.length} characters!`;
const hacker1Wins = `The driver has the longest name, it has ${hacker1.length} characters.`;
const hacker2Wins = `The navigator has the longest name, it has ${hacker2.length} characters.`;

console.log(" ");
console.log("--- Iteration 2: Conditionals ---");
console.log(" ");

if (hacker1.length === hacker2.length) {
  console.log(equal);
} else if (hacker1.length > hacker2.length) {
  console.log(hacker1Wins);
} else {
  console.log(hacker2Wins);
}

// Iteration 3: Loops

let nameWithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
  const letter = hacker1[i].toUpperCase();
  const letterWithSpace = letter + " ";
  nameWithSpaces = nameWithSpaces + letterWithSpace;
}
const nameWithoutLastIndex = nameWithSpaces.slice(0, -1);

// =============================

let nameBackwards = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  nameBackwards += hacker2[i];
}

// =============================

const hackers = [hacker1, hacker2];
const sortedHackers = hackers.sort();

const sameName = "What?! You both have the same name?";
const navWins = "Yo, the navigator goes first definitely.";
const driverWins = "The driver's name goes first.";

console.log(" ");
console.log("--- Iteration 3: Loops ---");
console.log(" ");

console.log(nameWithoutLastIndex);
console.log(nameBackwards);

if (hacker1 === hacker2) {
  console.log(sameName);
} else {
  if (hackers[0] === hacker1) {
    console.log(driverWins);
  } else {
    console.log(navWins);
  }
}

// Bonus 1

const loremText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis felis in erat ultrices, non condimentum ligula dictum. Phasellus et sollicitudin orci. Cras quis felis dolor. Nunc mi eros, ornare ut dignissim vitae, placerat ac diam.
 Ut nunc nibh, hendrerit quis varius et, iaculis ac ante. Donec commodo nunc tortor, ut congue mauris consequat eu. Nulla eros sapien, posuere non fermentum in, condimentum sit amet mauris.
  Sed suscipit nunc nec pulvinar placerat. Duis varius hendrerit massa, nec tincidunt lectus sagittis accumsan. Proin tempor feugiat lorem. Maecenas felis tortor, ornare non finibus et, sodales in sapien.
Donec vehicula, nulla nec pellentesque gravida, ex enim mattis erat, sed consequat urna quam a risus. Donec ac lacus a odio volutpat faucibus. In hac habitasse platea dictumst. Curabitur urna sapien, imperdiet a ultrices id, viverra a eros.
 Proin vitae tristique lectus. Fusce dignissim porttitor mattis. Duis faucibus lorem vel suscipit finibus. Aenean mollis nibh nisl, a iaculis lectus cursus vel. Sed ac leo nec diam ullamcorper maximus. Phasellus laoreet est a enim tincidunt, non tempus urna blandit.
Nunc commodo vulputate venenatis. Curabitur tristique convallis sem, ac cursus nibh finibus vitae. Etiam vitae ultricies mi. Vestibulum venenatis nulla non luctus dignissim. Sed vehicula sagittis massa, non consequat risus ultricies nec. Ut convallis semper diam.
 Morbi pellentesque neque ut est tristique, non convallis lectus rhoncus. Nulla molestie sed massa sed sollicitudin. Nulla augue nibh, semper sed dignissim nec, aliquet vitae nisl.
`;

const loremArray = loremText.split(" ");

// assuming correct punctiation

let etCounter = 0;
for (let i = 0; i < loremArray.length; i++) {
  const firstTwoLetters = loremArray[i].substring(0, 2);
  const thirdLetter = loremArray[i][2];

  if (firstTwoLetters === "et" || firstTwoLetters === "Et") {
    if (
      !thirdLetter ||
      (thirdLetter && thirdLetter.toUpperCase() === thirdLetter.toLowerCase())
    ) {
      etCounter++;
    }
  }
}

console.log(" ");
console.log("--- BONUS 1 ---");
console.log(" ");

console.log(`Number of words in string : ${loremArray.length}`);
console.log(`Number of Et in string: ${etCounter}`);

// Bonus 2

const phraseCheck = "Was it a car or a cat I saw?";

let phrase = "";
let reversePhrase = "";

for (let i = 0; i < phraseCheck.length; i++) {
  const currentCharacter = phraseCheck[i];
  const upperCase = currentCharacter.toUpperCase();
  const lowerCase = currentCharacter.toLowerCase();

  if (upperCase !== lowerCase) {
    phrase = phrase + lowerCase;
    reversePhrase = lowerCase + reversePhrase;
  }
}

console.log(" ");
console.log("--- BONUS 2 ---");
console.log(" ");

console.log(phraseCheck);
if (phrase === reversePhrase) {
  console.log("is a palindrome.");
} else {
  console.log("is not a palindrome.");
}
