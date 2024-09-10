// Iteration 1: Names and Input
const hacker1 = "Franzi";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Hernâni";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else console.log(`Wow, you both have equaly long names, ${hacker1.length}`);

// Iteration 3: Loops
const upperCasedString = hacker1.toUpperCase();
let newString = "";
for (let i = 0; i < upperCasedString.length; i++) {
  if(i !== hacker1.length -1) {
    newString += upperCasedString[i] + " ";
  } else {
    newString += upperCasedString[i];
  }
  
}

console.log(newString);

let reverseNavigator = "";

for (i = hacker2.length - 1; i >= 0; i--) {
  reverseNavigator += hacker2[i];
}

console.log(reverseNavigator);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const hacker1Upper = hacker1.toUpperCase();
const hacker2Upper = hacker2.toUpperCase();

if (alphabet.indexOf(hacker1[0]) < alphabet.indexOf(hacker2[0])) {
  console.log("The driver's name goes first.");
} else if (
  alphabet.indexOf(hacker1Upper[0]) > alphabet.indexOf(hacker2Upper[0])
) {
  console.log("Yo, the navigator goes first, definitely.");
} else console.log("What?! You both have the same name?");

//*************************** BONUS******************************

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacus posuere, eleifend dolor nec, mattis risus. Nam commodo, justo eu fringilla vehicula, turpis ligula accumsan lectus, non tristique urna lectus quis nulla. Fusce gravida orci eget ligula bibendum, vel sodales purus tempor. Nunc condimentum aliquet ipsum. Etiam aliquam nulla in sapien gravida, id luctus neque aliquam. Praesent gravida vehicula ornare. In vel facilisis purus. Fusce dictum imperdiet euismod. Fusce vestibulum ac nulla a suscipit. Pellentesque egestas, dui at volutpat laoreet, risus tellus tempor risus, vitae cursus risus justo id ipsum. Aliquam et leo at ipsum gravida rhoncus ut id purus. Donec faucibus et urna eu laoreet. Sed sit amet leo tristique, mattis velit in, pulvinar sapien. Praesent faucibus pellentesque risus, sit amet vulputate ex elementum at. Donec non turpis et enim sodales consectetur eget ac erat. Sed mauris tortor, fermentum et volutpat vitae, volutpat a nulla. Vivamus bibendum ligula ac velit finibus euismod. Nullam ac aliquet elit, sed ultrices odio. Sed consequat finibus magna, eget ornare metus faucibus vel. Cras lacinia nibh sed vehicula bibendum. Aliquam consequat orci lacus, at viverra lorem iaculis eget. Pellentesque pulvinar lacus nec consequat lobortis. Aliquam erat volutpat. Nulla elementum enim consectetur lectus viverra, vitae euismod ipsum tincidunt. Nunc in mattis purus. Vivamus auctor at odio at convallis. Ut vitae finibus felis. Nam nec orci augue. Quisque bibendum, augue vel auctor aliquam, eros mauris pretium tellus, id scelerisque libero dui sed mauris. Donec nibh dolor, sodales sit amet bibendum vel, eleifend eget neque. Cras placerat, nunc quis tempor finibus, elit tellus maximus nisl, feugiat blandit nunc nulla ut nisi. Vivamus molestie pharetra libero. Proin et urna nunc.";

const splitLongText = longText.split(" ");

console.log(splitLongText.length);

// Second version for counting the words
//counter started at 1 because the last word does not have a space after it
let counter = 1;

for (let i = 0; i <= longText.length; i++) {
  if (longText[i] === " ") {
    counter++;
  }
}

console.log(counter);

let counter2 = 0;

for (let i = 0; i <= longText.length; i++) {
  if (
    longText[i - 1] === " " &&
    longText[i] + longText[i + 1] === "et" &&
    longText[i + 2] === " "
  ) {
    counter2++;
  }
}

console.log(counter2);

const palindrome1 = "A man, a plan, a canal, Panama!";
const palindrome2 = "Amor, Roma";
const palindrome3 = "race car";
const palindrome4 = "stack cats";
const palindrome5 = "step on no pets";
const palindrome6 = "taco cat";
const palindrome7 = "put it up";
const palindrome8 = "Was it a car or a cat I saw?";
const palindrome9 = "No 'x' in Nixon";

console.log(palindrome2.length);
const sanitizedString = palindrome1.replace(/\W/g, "");
let standardPalindrome = sanitizedString.toUpperCase();

console.log(standardPalindrome);

let reversedPalindrome = "";

for (let i = sanitizedString.length - 1; i >= 0; i--) {
  reversedPalindrome += standardPalindrome[i];
}

if (reversedPalindrome === standardPalindrome) {
  console.log("The string is a palindrome.");
} else {
  console.log("The string is not a palindrome.");
}
