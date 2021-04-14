// Iteration 1: Names and Input
let hacker1 = "Aurelie";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jordan";
console.log(`The navigator's name is ${hacker2}`);
let hacker3 ="Bettina";
console.log(`The navigator's name is ${hacker3}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let splitUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  splitUpperCase += hacker1[i].toUpperCase();
  splitUpperCase += " ";
}
console.log(splitUpperCase);
let reverse = "";
for (let i = hacker1.length-1; i >= 0; i--) {
    reverse += hacker1[i];
}
console.log(reverse);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (hacker1.charCodeAt(0) < hacker2.charCodeAt(0)) {
  console.log(`The driver's name goes first.`);
} else if (hacker2.charCodeAt(0) < hacker1.charCodeAt(0)) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo posuere, lacinia leo et, blandit augue. Donec sed dui quam. Nam congue tristique mi finibus finibus. Mauris eu dolor vel tellus pharetra posuere. Vivamus nec sagittis nisi, non aliquam tellus. Cras consequat at elit eget scelerisque. Nullam convallis dui sed hendrerit molestie. Vivamus ac libero orci. Nulla eu turpis faucibus, sagittis dolor id, sollicitudin eros. Aenean eget quam ullamcorper, volutpat nisi nec, rhoncus diam. Ut pharetra neque nec dignissim sagittis. Maecenas eu arcu enim. Vestibulum tempor quam lorem, at consequat quam facilisis at. Sed ut convallis metus, in cursus ex. Donec sit amet libero id turpis accumsan egestas condimentum eget nulla. Aliquam hendrerit risus non quam ultricies posuere. Fusce eleifend mi quis suscipit laoreet. Vestibulum sed lorem nisl. Vivamus vel lorem sed magna mattis euismod in nec augue. Fusce et ultricies lorem. Vivamus nec odio vulputate purus rhoncus luctus. Nulla at metus bibendum, ultricies ligula imperdiet, semper enim. Nullam dignissim diam ut dapibus consequat. Fusce id lacinia nisl, ac semper purus. Curabitur sagittis eros in felis mollis placerat. Curabitur ex lacus, aliquam et diam id, cursus commodo nibh. Ut ac mi nec tortor semper sollicitudin. Pellentesque placerat, urna ut sodales porttitor, urna erat aliquet felis, quis blandit lorem purus in quam. Pellentesque et scelerisque eros, a faucibus velit. Suspendisse eget orci arcu. Etiam placerat, orci vel mollis pulvinar, quam diam pretium lacus, eu vestibulum sem lacus et ex. Praesent et purus ornare, tincidunt nisi at, ornare libero. Duis ut nisi id tortor porttitor interdum. Donec blandit a arcu at finibus. In non leo vel sapien porttitor posuere. Sed tempor ipsum ac venenatis suscipit.";

let myArray = paragraph.split(' ');
console.log(`There are ${myArray.length} words in the string.`);

countEt = 0;
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] == "et") {
    countEt+=1;
  }
}
console.log(`The Latin word et appears ${countEt} times.`);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue

let phraseToCheck = "amorroma"
    
let flag = true;
let j = 0;

for( let i = phraseToCheck.length-1; i > phraseToCheck.length / 2; i-- ) {
  if (phraseToCheck[i] !== phraseToCheck[j]) {
    flag = false;
    break;
  }
  j++;
}
   
if( flag ) {
  console.log('the word is palindrome.');
}
   
else {
 console.log('the word is not palindrome.');
}