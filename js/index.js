// Iteration 1: Names and Input
// 1.1 Create a variable called "driver" with the driver's name.

let driver = "Juli";

// 1.2 Print in the console "The driver's name is XXXX"

console.log(`The driver's name is ${driver}`);

// 1.3 Create a variable called "navigator" with the navigator's name.

let navigator = "Alba";

// 1.4 Print in the console "The navigator's name is YYYY"

console.log(`The navigator's name is ${navigator}`);


// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - Driver has the longest name, it has XX characters. or
// - Navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (driver.length > navigator.length){
    console.log(`Driver has the longest name, it has ${driver.length} characters.`);
  } else if (navigator.length > driver.length){
    console.log(`Navigator has the longest name, it has ${navigator.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!!!`);
  };


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let nameCapitals;

for (let i = 0; i < driver.length; i++) {
  if (i === 0) {
    nameCapitals = driver[i] + " ";
  } else {
    nameCapitals += driver[i] + " ";
  }
}

console.log(nameCapitals.toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

console.log(navigator.split("").reverse().join(""));

// Bonus Time!
// Bonus 1
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.

let loremStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis orci euismod urna pharetra mattis. Aliquam facilisis tempor quam non rhoncus. Donec sed euismod purus, vel ultricies est. Praesent ac mollis felis, sed malesuada sapien. Sed aliquam purus accumsan, rutrum turpis id, mollis augue. Donec quis ex consectetur, laoreet justo bibendum, pretium dolor. Sed maximus lorem et vehicula tristique. Maecenas consectetur pharetra cursus. Curabitur consequat purus sit amet dolor ullamcorper, elementum pretium purus dictum. Suspendisse potenti. Donec vestibulum leo a velit pharetra pulvinar. Praesent non lorem purus. Donec porttitor massa sem, sed consectetur felis aliquam a. Suspendisse posuere imperdiet nulla et luctus. Vestibulum eu mollis augue. Nullam et nunc vel odio mollis elementum. Suspendisse pretium cursus erat, vitae finibus odio facilisis a. Phasellus laoreet lacus eu turpis cursus iaculis. Donec porta mi non vehicula viverra. Nulla sollicitudin massa et nisl consectetur iaculis. Suspendisse potenti. Quisque nunc leo, tempor eget dapibus a, eleifend a dolor. Fusce malesuada eleifend dolor, quis vulputate nunc efficitur sit amet. Aliquam vulputate elementum tempus. Curabitur pretium elit vehicula lectus semper, sed blandit felis commodo. Aliquam consectetur rhoncus ipsum, at viverra nisi commodo ut. Proin sapien leo, eleifend ut ligula eu, viverra fringilla enim. Praesent tincidunt, tortor sed ullamcorper imperdiet, odio neque viverra libero, in egestas nibh mi sed elit. Sed ex velit, tempor quis orci eu, ultricies dictum tortor. Nunc eu nisi vulputate, commodo elit eget, vehicula nibh. Praesent dui nulla, porta in quam non, convallis ultricies nisl. Aliquam condimentum metus eget elit consequat, sit amet pretium est vestibulum. Cras sit amet venenatis ex. Cras quis tincidunt libero. Vivamus faucibus sem a urna egestas, sit amet semper ligula egestas. Mauris et arcu convallis, tempus urna fringilla, hendrerit ante. Sed ac mi ut enim rhoncus laoreet. Maecenas efficitur sed lectus vel posuere. Sed ut odio ante. Etiam quis sem ac est ornare pretium non pharetra ex. Vestibulum congue ligula quam, a maximus ligula suscipit nec. Nam aliquet lacus vel ex dignissim aliquet. Proin nec dictum purus. Curabitur id leo cursus, sagittis mauris at, fringilla ipsum. Nam vitae maximus lectus, in gravida orci. Sed ante urna, auctor eget maximus vitae, imperdiet a eros."

// Make your program count the number of words in the string.

let strToArray = loremStr.split(" ");
console.log(`Hay ${strToArray.length} palabras en la string`);

// Make your program count the number of times the Latin word "et" appears.

let strToArray = loremStr.split(" ");
let search = "et";
let searchCount = 0;

// check occurencies for "et" conjunction
for (let i = 0; i < strToArray.length; i++){
  if(search === strToArray[i]){
    searchCount++;
  };
};

// result
console.log(`La conjunción "et" aparece ${searchCount} veces en la string`);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. 
// Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
// -- "Amor Roma"
// -- "race car"
// -- "stack cats"
// -- "taco cat"
// -- "put it up"
// -- "A man a plan a canal Panama"
// -- "step on no pets"

let phraseToCheck = "Lorem, ipsum";
let phraseRight = phraseToCheck.split(" ").join('').toLowerCase();

let phraseReverse = "";

// reverse for loop to create the phraseReverse
for (let i = phraseRight.length - 1; i >= 0; i--) {
  phraseReverse += phraseRight[i];
}

// validation
if (phraseRight === phraseReverse){
  console.log(`The string "${phraseToCheck}" is a palindrome`);
} else {
  console.log(`The string "${phraseToCheck}" is NOT a palindrome`);
};