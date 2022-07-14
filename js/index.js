// console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "xxxx";
console.log(`the driver's name is ${hacker1}.`);

let hacker2 = "YYYY";
console.log(`The navigator"s name is ${hacker2}.`);

/*Iteration 2: Conditionals

2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/
function longestName(name1, name2) {
  if (name1.length > name2.length) {
    return `The driver named ${name1} has the longest name, it has ${name1.length} characters.`;
  } else if (name2.length > name1.length) {
    return `It seems that the navigator named ${name2} hsa the longest name, it has ${name2.length} characters.`;
  }
  return `Wow, you both have equally long names, ${name1.length} characters!`;
}

let printResults = longestName(hacker1, hacker2);
console.log(printResults);

/*
 Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
 */

function string_separator(someString) {
  let spaced = "";
  for (let i = 0; i < someString.length; i++) {
    spaced += someString[i] + " ";
  }
  let upperCasedString = spaced.toUpperCase();
  return upperCasedString;
}

let printstring = string_separator(hacker1);
console.log(printstring);
/**************************************************************************** */
function reverseString(someString) {
  let newString = "";
  for (let i = someString.length - 1; i >= 0; i--) {
    newString += someString[i];
  }
  return newString;
}

let reverseResult = reverseString(hacker2);
console.log(reverseResult);
