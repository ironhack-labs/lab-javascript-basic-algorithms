/* Iteration 1: Names and Input


1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY". */

const hacker1 = 'Vasco';

console.log(`The driver's name is ${hacker1}.`);

const hacker2 = 'Júlia';

console.log(`The navigator's name is ${hacker2}.`);

/* Iteration 2: Conditionals

2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

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
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

/* Iteration 3: Loops
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name? */

let hacker1Capital = '';

for (let i = 0; i < hacker1.length; i++) {
  hacker1Capital += hacker1[i].toUpperCase() + ' ';
}

console.log(hacker1Capital);

let hacker2Reversed = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first, definitely.');
} else {
  console.log('What?! You both have the same name?');
}

/* Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears. */

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et purus vel elit eleifend finibus. Proin et mollis ipsum, vitae auctor dolor. Donec massa mauris, bibendum sit amet felis vel, molestie facilisis odio. Cras at massa lobortis, fringilla lacus eget, laoreet massa. Integer eu neque lorem. Quisque imperdiet elit eget odio scelerisque, vel bibendum dui sollicitudin. Morbi ac volutpat erat. Mauris maximus libero sit amet suscipit molestie.

Curabitur quis lorem nisl. Curabitur mollis et arcu id tempus. Donec iaculis quis felis nec vestibulum. Aenean posuere lorem nec porttitor tincidunt. Sed bibendum hendrerit augue, quis malesuada erat efficitur in. Pellentesque id nisl finibus, ornare nulla quis, malesuada nibh. Morbi vitae ornare augue. Aliquam id purus ultricies, mattis urna eu, ultricies felis.

Nulla a tincidunt risus. Vestibulum aliquet massa eu fringilla aliquet. Mauris purus felis, molestie ac sagittis id, varius ut mauris. Proin vitae augue ullamcorper, ornare neque sit amet, lobortis nisl. Curabitur vel arcu at neque varius volutpat. Quisque vulputate ipsum dolor. Praesent posuere tortor ac mi euismod elementum. Nulla suscipit nulla sit amet pretium fringilla. Phasellus ultrices arcu eget dolor rutrum, at viverra sapien rhoncus.`;

let wordsArray = [];

wordsArray = longText.split(/\s+\b/);

console.log(`There are ${wordsArray.length} words in this paragraph.`);

let count = 0;

for (let i = 0; i < wordsArray.length; i++) {
  for (let j = 0; j < wordsArray[i].length; j++) {
    if (
      wordsArray[i][j] === 'e' &&
      wordsArray[i][j + 1] === 't' &&
      wordsArray[i].length === 2
    ) {
      //console.log(wordsArray[i]);
      count++;
    }
  }
}

console.log(`The word et appears ${count} times.`);

/* Bonus 2:
Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon". */

let phrase = 'step on no pets';

let phraseReversed = '';

let cleanPhrase = '';
let isPalindrome = false;

for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] !== ' ' && phrase[i] !== ',') {
    cleanPhrase += phrase[i].toLowerCase();
  }
}

console.log(cleanPhrase);

for (let j = cleanPhrase.length - 1; j >= 0; j--) {
  phraseReversed += cleanPhrase[j];
}

function checkIfPalindrome() {
  for (let i = 0; i < cleanPhrase.length; i++) {
    if (cleanPhrase[i] !== phraseReversed[i]) {
      return (isPalindrome = false);
    }
  }

  return (isPalindrome = true);
}

isPalindrome = checkIfPalindrome();

console.log(`Is the string "${phrase}" a Palindrome? ${isPalindrome}`);
