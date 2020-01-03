// Iteration 1: Names and Input

const hacker1 = 'Edu Driver';
const hacker2 = 'Edu Navigator';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

const driverUpper = hacker1.toUpperCase();
let driverUpperAndSpaces = '';

for (let i = 0; i < driverUpper.length - 1; i++) {
  driverUpperAndSpaces += driverUpper[i] + ' ';
}

driverUpperAndSpaces += driverUpper[driverUpper.length - 1];

console.log(driverUpperAndSpaces);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverseNavigator = '';

for (let i = hacker2.length - 1; i >= 0 ; i--) {
  reverseNavigator += hacker2[i];
}

console.log(reverseNavigator);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let i = 0;
let first;

while (first === undefined && hacker1[i] !== undefined && hacker2[i] !== undefined) {
  if (hacker1[i] < hacker2[i]) {
    first = 1;
  }
  else if (hacker2[i] < hacker1[i]) {
    first = 2;
  }
  else {
    i++;
  }
}

if (hacker1[i] === undefined && hacker2[i] === undefined) {
  first = 0;
}
else if (hacker1[i] === undefined) {
  first = 1;
}
else if (hacker2[i] === undefined) {
  first = 2;
}

if (first === 0) {
  console.log("What?! You both have the same name?");
} else if (first === 1) {
  console.log("The driver's name goes first.");
} else if (first === 2) {
  console.log("Yo, the navigator goes first definitely.");
}

// Bonus 1:

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet orci nec cursus porttitor. Fusce et accumsan diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam dignissim iaculis erat, quis vulputate arcu feugiat ut. Aliquam vitae ligula tempus, mattis neque nec, vestibulum orci. Proin id interdum enim, eu cursus turpis. Donec semper purus diam, vitae sodales ligula posuere at. 
Curabitur rutrum, nisi convallis dignissim laoreet, dui nulla lacinia arcu, a laoreet augue lacus at orci. Curabitur commodo turpis augue, sit amet dignissim risus viverra a. Vestibulum porta erat elit, non imperdiet odio lobortis nec. Phasellus lectus est, ullamcorper in sapien vel, pharetra consequat risus. Cras nec sagittis nulla. Proin luctus nisi fringilla viverra gravida. Sed vestibulum libero vitae nunc venenatis pulvinar. Aenean pellentesque, felis id consectetur auctor, nisl dui imperdiet risus, sed ullamcorper odio massa placerat lacus. Nam in libero ligula.

Quisque at tristique justo, at porta massa. In dictum turpis elit, eget consectetur urna gravida sed. Praesent ultricies risus at neque varius accumsan. Ut sit amet urna sagittis, sagittis magna eu, lacinia lacus. Integer blandit mollis pulvinar. Mauris gravida orci lacus, vel rhoncus lacus posuere finibus. Nulla laoreet risus sed accumsan pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Proin sed vehicula enim. Pellentesque ornare a erat in posuere. Donec est velit, rutrum ac purus ac, dapibus pulvinar arcu. Fusce lacus purus, accumsan sed orci ac, scelerisque ullamcorper turpis. Vivamus varius orci enim, a dictum erat tristique id. Morbi vel est ullamcorper, ultricies odio in, ornare elit. Aenean vehicula et enim in pretium.`;

const words = lorem.split(' ');
let numberOfEts = 0;

console.log(`The text has ${words.length} words.`);

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'et' || words[i] === 'et,' || words[i] === 'et.') {
    numberOfEts++;
  }
}

console.log(`The word 'et' appears ${numberOfEts} times.`);

// Bonus 2:

const phraseToCheck = 'Was it a car or a cat I saw?';
let phraseToCheckLowerCase;
let phraseToCheckJustLetters;
let reversePhraseToCheck = '';

phraseToCheckLowerCase = phraseToCheck.toLowerCase();
phraseToCheckJustLetters = phraseToCheckLowerCase.match(/[a-z]/g);
phraseToCheckJustLetters = phraseToCheckJustLetters.join('');

for (let i = phraseToCheckJustLetters.length - 1; i >= 0; i--) {
  reversePhraseToCheck += phraseToCheckJustLetters[i];
}

if (phraseToCheckJustLetters === reversePhraseToCheck) {
  console.log(`The phrase '${phraseToCheck}' is a palindrome!`);
}
else {
  console.log(`The phrase '${phraseToCheck}' is NOT a palindrome!`);
}