// Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.
const hacker1 = `Heinz`;

//1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = `Francesca`;

//1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//2.1
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, 
    it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, 
  it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} 
    characters!`);
}

/* Iteration 3: Loops
3.1 Print the characters of the driver's name, 
separated by space, and in capital letters, i.e., "J O H N".*/
const driver = hacker1;
let stringToPrint = ``;
const driversNameCap = driver.toUpperCase();
for (let i = 0; i < driver.length; i++) {
  stringToPrint += driversNameCap[i];
  if (i !== driver.length - 1) {
    stringToPrint += ` `;
  }
}
console.log(stringToPrint);

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
function reverseString(strng) {
  let reversedStr = ``;
  for (let i = strng.length - 1; i >= 0; i--) {
    reversedStr += strng[i];
  }
  return reversedStr;
}

const navigator = hacker2;
console.log(reverseString(navigator));

//3.3
if (driver < navigator) {
  console.log(`The driver's name goes first.`);
} else if (driver > navigator) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus1
//Generate 3 paragraphs. Store the text in a new string variable named longText.
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nunc dolor. 
Suspendisse vulputate mattis metus, ut egestas lacus mollis vitae. Suspendisse accumsan maximus 
augue ac facilisis. Donec vitae maximus nibh. Morbi nec diam cursus, consequat enim ac, tempor dolor. 
Curabitur vel dignissim lectus, a sodales massa. Class aptent taciti sociosqu ad litora torquent per 
conubia nostra, per inceptos himenaeos.

Nulla a imperdiet metus. Etiam sit amet tellus id sem tristique fringilla. Vestibulum imperdiet dolor 
id risus eleifend rutrum. Phasellus quis tincidunt metus, quis mollis felis. Maecenas mattis magna 
vitae urna vestibulum, vel semper purus tempor. Vestibulum blandit magna ultricies, condimentum enim 
molestie, posuere sem. Fusce cursus vulputate justo, nec consectetur est elementum sed. Nullam luctus 
vel libero sed pharetra.

Proin sit amet libero est. Nunc hendrerit metus at pharetra luctus. Aliquam tellus quam, pretium nec 
felis in, elementum placerat nisi. Nullam ut aliquet erat. Vestibulum pretium, arcu et vehicula pharetra,
 ante lectus rhoncus nisl, eget condimentum quam sem eget justo. Aliquam laoreet leo et nibh vehicula 
 feugiat. Etiam pulvinar eget nulla rutrum lobortis. Sed suscipit eros eu elit dictum vulputate. Etiam 
 euismod fringilla dui et aliquam. Suspendisse a urna sed enim fringilla posuere. Nullam sodales dolor 
eget viverra rutrum. Etiam metus lectus, fringilla vitae malesuada nec, elementum sed nulla.`;

//Make your program count the number of words in the string.
//trimString(strng) entfernt mögliche Leerzeichen vorne und hinten
function trimString(strng) {
  let trimmedStr = strng;
  while (trimmedStr[0] === ` `) {
    trimmedStr = trimmedStr.slice(1);
  }
  while (trimmedStr[trimmedStr.length - 1] === ` `) {
    trimmedStr = trimmedStr.slice(0, trimmedStr.length - 1);
  }
  return trimmedStr;
}

// Ersetzt Whitespaces durch Leerzeichen
function WhiteSpacesToSpaces(text) {
  return text.replace(/\s/g, ` `);
}

function splitIntoWords(text) {
  let wordsArray = [];
  let word = ``;
  let normalizedText = WhiteSpacesToSpaces(text);
  const cleanedText = removeSpecialChars(trimString(normalizedText));
  let inWord = false;

  for (let i = 0; i < cleanedText.length; i++) {
    if (cleanedText[i] !== ` `) {
      word += cleanedText[i];
      inWord = true;
    } else if (inWord) {
      wordsArray.push(word);
      word = ``;
      inWord = false;
    }
  }
  //Abfrage des letzten Zeichens, das kein Leerzeichen ist
  if (inWord) {
    wordsArray.push(word);
  }
  return wordsArray;
}

function countAllWords(strng) {
  return splitIntoWords(strng).length;
}

console.log(`Der gegebene Text hat ${countAllWords(longText)} Wörter.`);

//Make your program count the number of times the Latin word et appears.

function removeSpecialChars(text) {
  return text.replace(/[^\p{L}0-9 ]/gu, "");
}

function countWordOccurence(word, text) {
  const wordDecap = word.toLowerCase();
  const textDecap = text.toLowerCase();
  const wordsArray = splitIntoWords(textDecap);
  let count = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordDecap) {
      count++;
    }
  }
  return count;
}

const etCount = countWordOccurence(`et`, longText);
console.log(`Das Wort "et" taucht ${etCount} Mal im Text auf.`);

/*Bonus 2
Create a new variable, phraseToCheck, containing some string value. */
let phraseToCheck = `Lesen Esel?`;

/*Write a code to check if the value assigned to this variable is a Palindrome.*/
function removeSpaces(text) {
  return text.replace(/\s/g, "");
}

function isPalindrome(strng) {
  const strngDecap = strng.toLowerCase();
  const strTrimmed = removeSpaces(strngDecap);
  const modifiedStr = removeSpecialChars(strTrimmed);
  for (let i = 0; i < modifiedStr.length / 2; i++) {
    if (modifiedStr[i] !== modifiedStr[modifiedStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

if (isPalindrome(phraseToCheck)) {
  console.log(`Der gegebene Text ist ein Palindrom.`);
} else {
  console.log(`Der gegebene Text ist kein Palindrom.`);
}
