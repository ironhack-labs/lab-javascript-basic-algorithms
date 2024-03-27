// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name. <br>
// 1.2 Print `"The driver's name is XXXX"`.<br>
// 1.3 Create a variable `hacker2` with the navigator's name.<br>
// 1.4 Print `"The navigator's name is YYYY"`.
// - `The driver has the longest name, it has XX characters.` or <br>
//     - `It seems that the navigator has the longest name, it has XX characters.` or <br>
//     - `Wow, you both have equally long names, XX characters!`.

// Bonus Time!
// Bonus 1:
// Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// IMPORTANT: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as join(), reverse(), etc.). However, we want you to apply your current knowledge and try to come up with a solution by just using the for loop and if-else statements with some break and continue.

// Happy coding! ❤️

const hacker1 = "Stephan";

console.log(`The driver's name is ${hacker1}"`);

const hacker2 = "Dieter";
console.log(`The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
} else {
  `Wow, you both have equally long names, ${hacker2.length} characters!`;
}

let newName = "";
for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i] + " ";
  newName2 = newName.toUpperCase();
}
console.log(`result: ${newName2}`);

let newSeconde = [];
for (let i = hacker2.length - 1; i >= 0; i--) {
  newSeconde += hacker2[i];
}
console.log(`result: ${newSeconde}`);
// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?
// Bonus Time!
// Bonus 1:
// Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// IMPORTANT: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as join(), reverse(), etc.). However, we want you to apply your current knowledge and try to come up with a solution by just using the for loop and if-else statements with some break and continue.

// Happy coding! ❤️
