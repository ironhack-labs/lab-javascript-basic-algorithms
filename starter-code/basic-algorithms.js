// Exercise
// Names and Input
// Create a variable hacker1 with the driver's name
let hacker1 = 'Dax';

// Print "The driver's name is XXXX"
console.log(`The driver's name is ${hacker1}`);

// Create a variable hacker2 and ask the user for the navigator's name
let hacker2 = 'Rodrigo';

// Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`);


// Conditionals
// Depending on which name is longer, print:
// The Driver has the longest name, it has XX characters or
// Yo, navigator got the longest name, it has XX characters or
// wow, you both got equally long names, XX characters!!
if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1} characters!`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2} characters!`);
} else {
  console.log(`Wow, you both got equally long names, ${hacker1} characters!`);
}

// Loops
// Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
function capSpace(hacker) {
  const newHacker = [];
  for (let i = 0; i < hacker.length; i += 1) {
    newHacker.push(hacker[i].toUpperCase());
  } return newHacker.join(' ');
}

console.log(capSpace(hacker2));


// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
function reversedName(hackerRev) {
  let reversed = '';
  for (let i = hackerRev.length - 1; i >= 0; i -= 1) {
    reversed += hackerRev[i];
  } console.log(reversed);
}
reversedName(hacker2);

// Depending on the lexicographic order of the strings, print:
// The driver's name goes first
// Yo, the navigator goes first definitely
// What?! You both got the same name?
const hackers = [hacker1, hacker2];
const ordenatedVar = hackers.sort();

if (ordenatedVar[0] === hacker1) {
  console.log('The driver\'s name goes first');
} else if (ordenatedVar[0] === hacker2) {
  console.log('Yo, the navigator goes first definitely');
} else {
  console.log('What?! You both got the same name?');
}

console.log(ordenatedVar);

// Lorem ipsum generator
// Bonus Time!
// Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:

const testString1 = 'A man, a plan, a canal, Panama!';
const testString2 = 'Amor, Roma';
const testString3 = 'race car';
const testString4 = 'stack cats';
const testString5 = 'step on no pets';
const testString6 = 'taco cat';
const testString7 = 'put it up';
const testString8 = 'Was it a car or a cat I saw?';
const testString9 = 'ola';

function palindromeChecker(regularStr) {
  const regularArr = [...regularStr.toUpperCase()].filter((el) => el.charCodeAt() >= 64 && el.charCodeAt() <= 91);
  const regularArrReversed = [...regularArr].reverse();
  if (regularArr.join('') === regularArrReversed.join('')) {
    return `The string '${regularStr}' is equal to itself backwards, therefore it's is a palindrome!`;
  }
  return `The string '${regularStr}' is not equal to itself backwards, therefore the string is not a palindrome!`;
}

console.log(palindromeChecker(testString9));

// Go to lorem ipsum generator and:
// Generate 3 parragraphs. Store the text in a String
// Make your program count the number of words in the string
// Make your program count the number of times the latin word et appears

let pieceOfText1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et facilisis sapien. Ut at elit dolor. Quisque nisl metus, volutpat ut tellus a, scelerisque ornare leo. Nam mattis rhoncus auctor. Fusce sed porta diam, ut consectetur sapien. Mauris vulputate vestibulum venenatis. Ut imperdiet tempus dolor, in ullamcorper massa porttitor in. Duis quis sem vitae nibh pulvinar venenatis ac ut massa. Quisque et ullamcorper mauris, vitae bibendum tortor. Curabitur ultricies justo at metus suscipit vestibulum.';

let pieceOfText2 = 'Vivamus interdum laoreet tellus vitae faucibus. Aliquam erat velit, porta elementum ligula ac, sagittis mattis risus. Cras suscipit, turpis ac cursus pulvinar, tortor eros iaculis risus, vel semper felis est et ligula. Vestibulum at turpis massa. Donec cursus nisi sit amet lectus porta efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam orci dolor, ultricies eget hendrerit vitae, malesuada hendrerit neque. In vehicula ullamcorper venenatis. Fusce dapibus tortor ac arcu maximus sollicitudin. Suspendisse potenti.';

let pieceOfText3 = 'Pellentesque tristique eros sed mauris ullamcorper consectetur id sit amet tellus. Ut et molestie turpis. Nam eu erat efficitur, hendrerit nibh vitae, mollis massa. Duis tincidunt ultricies leo. Phasellus pellentesque odio nec ex dictum congue. Vivamus porta quis eros vulputate fermentum. Praesent pulvinar tellus at elit venenatis, in dignissim magna aliquet. Integer lacinia, lacus in pulvinar ultricies, enim turpis condimentum lacus, at placerat augue neque vitae orci. Aliquam et pulvinar mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis odio in augue sodales ullamcorper. Pellentesque et turpis non magna gravida lobortis eu non sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In efficitur risus quis ligula dignissim finibus.';

function wordsCounter(text) {
  let anyWordCounter = text.split(' ');
  return anyWordCounter.length;
}

console.log(wordsCounter(pieceOfText1));


function wordsCounterEt(text) {
  const counter = text.split(' ');
  const arrEts = [];
  for (let i = 0; i <= counter.length; i += 1) {
    if (counter[i] === 'et') {
      arrEts.push(counter[i]);
    }
  }
  return `There are ${arrEts.length} 'et' words in this string!`;
}

console.log(wordsCounterEt(pieceOfText1));
