// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Beatriz';

// 1.2 Print `"The driver's name is XXXX"`
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Gabriela';

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// 2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
const betweenChars = ' ';
alert(hacker1.split('').join(betweenChars).toUpperCase());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
alert(hacker2.split('').reverse().join(''));

// 3.3 Depending on the lexicographic order of the strings, print:
const comparison = hacker1.localeCompare(hacker2);

if (comparison < 0) {
  console.log(`The driver's name goes first.`);
} else if (comparison > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer augue magna, tempor eget odio vel, bibendum semper sapien. Sed tristique metus in nibh tempus, accumsan blandit libero sodales. Aenean id dignissim metus. In ac dapibus mauris. Mauris pharetra congue neque quis porttitor. Donec augue massa, elementum nec aliquet nec, placerat ut nisl. Donec tristique fringilla felis, vel fermentum libero pharetra sed. Quisque at ipsum nibh. Aenean vitae sem nisl.';

// Count the number of words in the string
const countWords = lorem.split(' ').length;

console.log(countWords);

// Count the number of time the latin word 'et' appears
(lorem.match(/ et /) || []).length;

// Bonus 2
const phraseToCheck = 'A man, a plan, a canal, Panama!';

let sanitizedPhrase = '';

for (let i = 0; i < phraseToCheck.length; i++) {
  const character = phraseToCheck[i].toUpperCase();
  if (character >= 'A' && character <= 'Z') {
    sanitizedPhrase += character;
  }
}

console.log(sanitizedPhrase);

for (let i = 0; i < sanitizedPhrase.length; i++) {
  const a = sanitizedPhrase[i];
  const b = sanitizedPhrase[sanitizedPhrase.length - 1 - i];
  if (a !== b) {
  }
}
