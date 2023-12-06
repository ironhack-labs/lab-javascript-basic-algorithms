// Iteration 1: Names and Input

const hacker1 = "Juan";
const hacker2 = "Alberto";

console.log(`The driver is ${hacker1}`);
console.log(`The navigator is ${hacker2}`);

// Iteration 2: Conditionals
let longest;
if ( hacker1.length > hacker2.length) {
    longest = hacker1;
    console.log(`The driver has the longest name, it has ${longest.length} characters.`)
} else if ( hacker2.length > hacker1.length) {
    longest = hacker2;
    console.log(`It seems that the navigator has the longest name, it has ${longest.length} characters.`)
} else if ( hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let i = 0;
let j = 0;

while (i < hacker1.length && j < hacker2.length) {
  if (hacker1[i] > hacker2[j]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i] < hacker2[j]) {
    console.log("Yo, the navigator goes first, definitely.");
    break;
  } else {
    i++;
    j++;
  }
}

if (i === hacker1.length && j === hacker2.length) {
  console.log("What?! You both have the same name?");
}

// BONUS 1 

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum lectus in mi rutrum, sit amet ultrices quam facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sapien sapien, fringilla non mauris ac, egestas mollis dui. Cras semper, metus a auctor volutpat, diam massa tincidunt sem, non pellentesque risus metus non augue. Vivamus id pellentesque est. Integer et libero diam. Donec fringilla iaculis tortor, bibendum aliquam mi tempus sed. In malesuada mattis iaculis. Suspendisse venenatis elementum nulla, sed blandit orci aliquam vel"

const cleanText = longText.trim();
let textIsCorrect = true;

let count = 0;

if ( cleanText.length > 0) {
  count = 1;
}
 

for ( i = 0; i < cleanText.length; i++){

    if (cleanText[i] === " " && cleanText[i - 1] !== " ") {
        count++;
    } else if (cleanText[i] === " " && cleanText[i - 1] === " ") {
        textIsCorrect = false;
    }
}

if (textIsCorrect){
  console.log(count)
} else {
  console.log("El texto tiene dobles espacio")
}

// "et" COUNTER

const word = "et"
const wordsArray = longText.split(" ");

let etCount = 0;

for ( i = 0; i < wordsArray.length; i++ ) {
  if ( wordsArray[i].toLowerCase() === word.toLowerCase() ) {
    etCount++
  }
}

console.log(etCount)

// BONUS 2 

const phraseToCheck = "carrac"
let reverseWord = ""

  for ( let i = phraseToCheck.length - 1; i >= 0; i--) {
      reverseWord += phraseToCheck[i]
  }

  if ( reverseWord.toLowerCase() === phraseToCheck.toLowerCase() ) {
    console.log(`${phraseToCheck} is a palindrome`)
  } else {
    console.log(`${phraseToCheck} is not a palindrome`)
  }