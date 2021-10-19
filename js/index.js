console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Hugo";
console.log("The driver's name is " + hacker1 + ".");

let hacker2 = "Viviane";
console.log("The navigator's name is " + hacker2 + ".");

// Iteration 2: Conditionals
let length1 = hacker1.length;
let length2 = hacker2.length;

if (length1 > length2) {
  console.log ("The driver has the longest name, it has " + length1 + " characters.")
} else if (length1 == length2) {
  console.log ("Wow, you both have equally long names, " + length1 + " characters!")
} else {
  console.log ("It seems that the navigator has the longest name, it has " + length2 + " characters.")
};

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
const splittedHacker1 = hacker1.split('');
const stringWithSpaces1 = splittedHacker1.join(' ');
const upperCaseStringWithSpaces1 = stringWithSpaces1.toUpperCase();
console.log(upperCaseStringWithSpaces1);

// 3.2 Print all the characters of the navigator's name, in reverse order
function ReverseString(str) {
   return str.split('').reverse().join('')
}
console.log (ReverseString(hacker2));

// Depending on the lexicographic order of the strings
function strcmp(hacker1, hacker2) {
    if(hacker1 === hacker2) {
        return "What?! You both have the same name?";
    }

    if (hacker1 > hacker2) {
        return "Yo, the navigator goes first definitely.";
    } else {
      return "The driver's name goes first.";
    }
}

console.log(strcmp(hacker1, hacker2));
