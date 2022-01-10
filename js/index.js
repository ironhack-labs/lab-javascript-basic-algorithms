// Iteration 1: Names and Input
// 
var hacker1 = 'John';

console.log(hacker1);

var hacker2 = 'Alex';

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

while (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

// 3.1.

const hacker1 = 'John';
const splittedString = hacker1.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);


// 3.2.

// program to reverse a string

function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}
 
// take input from the user
const string = 'John';

const result = reverseString(string);
console.log(result);



//3.3.

let hacker2 = 'Alex'
    
if (hacker1[0] < navigator[0]) {
  console.log(`${hacker1} goes first.`) 
} else if (hacker1[0] == hacker2[0]) {
    console.log('What?! You both have the same name?')
  } else {
    console.log(`Yo, ${hacker2} goes first definitely.`)
  }
