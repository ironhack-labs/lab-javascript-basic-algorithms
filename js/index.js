/*

  Iteration 1: Names and Input

  1.1 Create a variable `hacker1` with the driver's name.

  1.2 Print `"The driver's name is XXXX"`.

  1.3 Create a variable `hacker2` with the navigator's name.

  1.4 Print `"The navigator's name is YYYY"`.

*/

console.log(`
==
#1
==
`);

const hacker1 = 'Viktor';
const hacker2 = 'Viktor2';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

/* 

  Iteration 2: Conditionals

  2.1. Depending on which name is longer, print:

  - The driver has the longest name, it has XX characters. 

  or

  - It seems that the navigator has the longest name, it has XX characters. 

  or

  - Wow, you both have equally long names, XX characters!.

*/

console.log(`
==
#2
==
`);


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
}

/*

  Iteration 3: Loops

  3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

  3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

  3.3 Depending on the lexicographic order of the strings, print:
  - The driver's name goes first.
  - Yo, the navigator goes first definitely.
  - What?! You both have the same name?

*/

console.log(`
==
#3
==
`);


const cheerleader = (word) => {
  let nameArray = [];

  for (i = 0; i < word.length; i++) {
    nameArray += `${word[i]} 👏 `;
  }

  console.log(nameArray.toUpperCase());
}

const putThatThangDownFLipItAndReverseIt = (word) => {
  let nameArray = [];

  for (i = word.length - 1; i >= 0; i--) {
    nameArray += word[i];
  }

  console.log(nameArray.toUpperCase());
}

const whoIsFirst = (driver = hacker1, navigator = hacker2) => {
  if (navigator.localeCompare(driver) < 0) {
    console.log(`The navigator, ${navigator} goes first`)
  } else if (driver.localeCompare(navigator) < 0) {
    console.log(`The driver, ${driver} goes first`)
  } else {
    console.log('What, you have both the same name??')
  }
}

cheerleader(hacker1);
putThatThangDownFLipItAndReverseIt(hacker2);
whoIsFirst();

/*

  Bonus 1:
  Go to lorem ipsum generator and:

  Generate 3 paragraphs. Store the text in a variable type of string.
  Make your program count the number of words in the string.
  Make your program count the number of times the Latin word et appears.

*/

console.log(`
==
Bonus #1
==
`);


const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur lorem libero, ac eleifend ligula pulvinar sed. In ligula orci, fermentum sed eros sit amet, luctus maximus mauris. Nulla cursus commodo quam, eleifend condimentum lorem imperdiet eu. Curabitur et tellus ut tortor venenatis volutpat. Mauris tempus dignissim nibh eu eleifend. Mauris sit amet quam in eros vehicula posuere fringilla et erat. Proin mattis tortor ipsum, at vestibulum dui laoreet et. Suspendisse a rutrum ante, non tempus magna. Nunc finibus, tortor et placerat dictum, sem magna bibendum mauris, ac iaculis dui est eget diam. Integer aliquam pulvinar viverra. Vestibulum ac luctus purus.

Duis non libero mi. Proin sodales ex ac cursus tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae ligula egestas, consectetur mi a, efficitur nibh. Cras lorem ante, dictum fringilla enim non, ultricies semper mauris. Integer imperdiet nisi eget enim suscipit, eget sollicitudin lorem feugiat. Etiam posuere odio ac dui mollis faucibus. Etiam auctor est nulla. Sed luctus at augue et ullamcorper. Maecenas vitae lobortis velit, sit amet iaculis nisl. Nunc id finibus nisi. Duis in neque tellus. In vulputate mi nulla, nec eleifend dui imperdiet at. Duis nisl leo, accumsan sit amet euismod eu, cursus vitae felis.

Nunc pharetra mauris ligula, accumsan varius lacus molestie a. Fusce placerat ac nisl vitae consequat. Mauris tincidunt, risus non finibus rhoncus, lectus lacus malesuada massa, interdum fermentum nulla ipsum efficitur dolor. Integer sagittis eu eros ac condimentum. Nullam nisi sapien, tempus in porttitor gravida, pharetra convallis tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam urna purus, semper accumsan fermentum fermentum, laoreet vel augue. Praesent gravida neque non odio euismod sodales. Phasellus sit amet odio ut ex convallis laoreet.`

const countDracula = (phrase = lorem, searchTerm = 'et') => {

  const result = { totalWordCount: 0, searchResults: 0 };
  
  const words = phrase.split(' ');
  result.totalWordCount = words.length;
  
  for (word of words) { (word === searchTerm) && result.searchResults++; }

  console.table(result);

}

countDracula();

/*

  Bonus 2:
  Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

  "A man, a plan, a canal, Panama!"
  "Amor, Roma"
  "race car"
  "stack cats"
  "step on no pets"
  "taco cat"
  "put it up"
  "Was it a car or a cat I saw?" and "No 'x' in Nixon".

 */

console.log(`
==
Bonus #2
==
`);


const sarahPalindrome = (phrase = "A man, a plan, a canal, Panama!") => {
  
  let count = 0;

  phraseWithoutStuff = phrase.replace(/[^a-zA-Z0-9]/g, '');
  sanitizedPhrase = phraseWithoutStuff.toLowerCase();
  
  letters = sanitizedPhrase.split('');
  lettersReversed = letters.reverse();

  for (i = 0; i <= letters.length; i++) {
    (letters[i] === lettersReversed[i]) && count++;
  }

  const result = () => {
    return (letters.length === count - 1) ? true : false;
  }

  console.log(`"${phrase}" is a palindrome: ${result()}`);

}

sarahPalindrome();
