// console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = 'kenneth'
// console.log(`The driver's name is ${hacker1}`)

// or console.log(`The driver's name is + hacker1 +'.')

const hacker2 = 'olga'
// console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator ahs the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let capsAndSpace = "";
for (let i = 0; i < hacker1.length; i++) {
  capsAndSpace += hacker1[i].toUpperCase() + " ";
}
// console.log(capsAndSpace);

// trim() removes whitespace from both ends of a string and returns a new string, without modifying the original string.
// e.g. const greeting = ' Hello, world! ';
// console.log(greeting);
// expected output: " Hello world! ";
// console.log(greeting.trim());
// expected output: "Hello world!";

// 3.2 Print all characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseNavi = "";
// console.log(hacker2.length);
for (let i = hacker2.length - 1; i >= 0; i--) {
  // console.log(hacker2[i]);
}

// 3.3 
// The .localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given 
// string in sort order.
// Negative when the referenceStr occurs before compareString
// Positive when the referenceStr occurs after compareString
// Returns 0 if they are equivalent

// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0

if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Time
// Bonus 1:
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue quam vitae diam condimentum convallis. 
Aliquam sapien ante, posuere quis viverra non, ultrices at nulla. Quisque malesuada sem a odio iaculis, non faucibus massa eleifend. 
Sed feugiat tempor massa. Cras nec ultricies risus, nec tempus orci. Sed maximus sagittis consectetur. Cras consectetur lacus a libero 
convallis feugiat. Curabitur et consectetur sem. Quisque erat tortor, consectetur sed est a, imperdiet sollicitudin ligula. Etiam purus libero, 
faucibus nec purus id, tincidunt vestibulum massa. Maecenas volutpat, leo maximus vehicula euismod, sapien ipsum interdum sem, sed auctor ante 
ante id est. Aenean elementum non nibh in consectetur. Vivamus iaculis finibus justo at tincidunt. Morbi venenatis gravida justo sit amet sodales.
Nulla faucibus a libero sed feugiat. Morbi laoreet tortor quis vestibulum finibus. Phasellus vitae ex mauris. Quisque interdum turpis ut nulla 
sodales, ac pellentesque elit sagittis. Nam a tincidunt dolor, a vulputate lorem. Curabitur posuere diam vel mi pellentesque lacinia. Ut ut 
commodo nisl. Mauris vitae malesuada orci. Aenean a arcu blandit, condimentum erat ultricies, semper mi. Duis congue blandit dui, vel porttitor 
orci ornare non. Suspendisse tortor magna, aliquet id justo vitae, gravida pretium enim.`;

// Count the number of words in the string

let counter = 1;
for (let i = 0; i < lorem.length - 1; i++) {
  if (lorem[i] === ' ') {
    counter++;
  }
}
console.log(counter);

// OR

// console.log(lorem.split(" ").length);

// Count the number of times the latin word "et" appears

let foundEt = 0;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === 'e' && lorem[i + 1] === 't' && lorem[i + 2] === ' ' && lorem[i - 1] === ' ') {
    foundEt += 1
  }
}

// console.log(foundEt);

// Bonus 2: 
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to 
// this variable is a Palindrome. 

function checkPalindrome(str) {
  // find the length of a string
  const len = str.length;

  // loop through half of the string
  for (let i =0; i < len / 2; i++) {

    // check if first and last string are the same
    if (str[i] !== str[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
  return 'It is a palindrome';
}

// call the function
checkPalindrome("tacocat");

// The length of the string is calculated using the length property.
// The for loop is used to iterate up to the half of the string. The if condition is used to check if the first and the corresponding last 
// characters are the same. This loop continues till the half of the string.
// During the iteration, if any character of the string, when compared with its corresponding last string is not equal, the string is not 
// considered a palindrome.

// OR 

function checkPalindromeOrNot(str) {
  // convert string to an array
  const arrayValues = str.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if (str == reverseString) {
    console.log('It is a palindrome');
  } else {
    console.log('It is not a palindrome');
  }
}

checkPalindromeOrNot("tacocat");

// The split('') method converts the string into individual array characters.
// const arrayValues = string.split(''); // ["h", "e", "l", "l", "o"]
// The reverse() method reverses the position in an array.
// // ["o", "l", "l", "e", "h"]
// const reverseArrayValues = arrayValues.reverse();
// The join('') method joins all the elements of an array into a string.
// const reverseString = reverseArrayValues.join(''); // "olleh"
// Then the if...else statement is used to check if the string and the reversed string are equal. 
// If they are equal, the string is a palindrome.

// OR

function checkPalindromeOrNot(str) {
	const reverseString = str.split('').reverse().join('');

  if (str == reverseString) {
    console.log('It is a palindrome');
  } else {
    console.log('It is not a palindrome');
  }
}

checkPalindromeOrNot("tacocat");

// Ironhack Solution below:

// function isPalindrome(str) {
//   let reversed = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]
//   }
//   if (reversed === str) {
//     console.log('it is a palindrome');
//   } else {
//     console.log('not a palindrome');
//   }
// }