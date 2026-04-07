// Iteration 1: Names and Input
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "John";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

let driverNameWithSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
  driverNameWithSpaces += hacker1[i].toUpperCase();

  if (i < hacker1.length - 1) {
    driverNameWithSpaces += " ";
  }
}

console.log(driverNameWithSpaces);

// Iteration 3: Loops
let reversedNavigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigatorName += hacker2[i];
}

console.log(reversedNavigatorName);

const driverNameLowerCase = hacker1.toLowerCase();
const navigatorNameLowerCase = hacker2.toLowerCase();

if (driverNameLowerCase < navigatorNameLowerCase) {
  console.log("The driver's name goes first.");
} else if (driverNameLowerCase > navigatorNameLowerCase) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum fermentum ex quis aliquam. Ut tincidunt eu diam eget pellentesque. Fusce ac porta nulla. Integer fermentum ultrices ipsum eu pharetra. Donec elementum ligula non feugiat interdum. Aliquam nibh diam, imperdiet non eleifend quis, egestas sed erat. Morbi molestie ipsum quis sapien bibendum, id feugiat massa finibus. Morbi viverra libero eget ipsum placerat vehicula. Praesent interdum odio id purus blandit vulputate. Duis faucibus porttitor est a accumsan. Suspendisse potenti. Integer ipsum est, tristique vel hendrerit quis, congue eget libero. Quisque quam tellus, tempor ut eleifend ut, sodales eget elit. Vestibulum interdum a nibh id gravida. Quisque vel libero vel sapien pulvinar rutrum non eget diam. Etiam sed blandit purus.

Ut vestibulum justo ac nulla pellentesque, sit amet auctor sapien rhoncus. Ut ut diam lorem. Proin tincidunt sollicitudin elit ut viverra. Aliquam facilisis neque id dui pretium, accumsan suscipit arcu vulputate. Sed posuere velit eu interdum dictum. Morbi a orci ex. Cras consequat nec dolor non molestie.

Aliquam id dui semper, hendrerit felis sed, tempor neque. Nunc id scelerisque orci, ac volutpat tellus. Phasellus aliquam tempor lectus id tempor. Sed nec urna a metus imperdiet varius. Sed molestie nec urna nec pulvinar. Curabitur fermentum id ligula id varius. Nullam pretium tortor vestibulum, cursus lacus et, ultricies lorem. Praesent eu dictum tortor, eu tincidunt leo.`;

let wordCount = 0;
let isInsideWord = false;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] !== " " && longText[i] !== "\n") {
    if (!isInsideWord) {
      wordCount++;
      isInsideWord = true;
    }
  } else {
    isInsideWord = false;
  }
}

console.log(wordCount);

let etCount = 0;
let currentWord = "";

for (let i = 0; i < longText.length; i++) {
  const currentCharacter = longText[i].toLowerCase();

  if (
    (currentCharacter >= "a" && currentCharacter <= "z") ||
    (currentCharacter >= "0" && currentCharacter <= "9")
  ) {
    currentWord += currentCharacter;
  } else {
    if (currentWord === "et") {
      etCount++;
    }

    currentWord = "";
  }
}

if (currentWord === "et") {
  etCount++;
}

console.log(etCount);

const phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  const currentCharacter = phraseToCheck[i].toLowerCase();

  if (
    (currentCharacter >= "a" && currentCharacter <= "z") ||
    (currentCharacter >= "0" && currentCharacter <= "9")
  ) {
    cleanPhrase += currentCharacter;
  }
}

let isPalindrome = true;

for (let i = 0; i < cleanPhrase.length / 2; i++) {
  const oppositeIndex = cleanPhrase.length - 1 - i;

  if (cleanPhrase[i] !== cleanPhrase[oppositeIndex]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}
