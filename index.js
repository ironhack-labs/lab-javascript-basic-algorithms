                                                                                    // LAB 1 - JAVASCRIPT BASIC ALGORITHMS // 


// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.

// 1.2 Print "The driver's name is XXXX".

// 1.3 Create a variable hacker2 with the navigator's name.

// 1.4 Print "The navigator's name is YYYY".

let hacker1 = 'Humberto';
 console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Carlos';
  console.log(`The navigator's name is ${hacker2}`);



//   Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length)
  {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length < hacker2.length)
  {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
  }
  else if (hacker1.length == hacker2.length)
  {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`);
  }

//    Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let separatedString = "";
for (let i = 0; i < hacker1.length; i++) {
   separatedString = separatedString + hacker1.charAt(i) + " ";
}
  separatedString = separatedString.toUpperCase();

  console.log(separatedString);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseString = "";


for (let i = hacker2.length; i > 0; i--) {
  reverseString += hacker2[i - 1];
}

console.log(reverseString)


// 3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?

/* The string.localeCompare() is an inbuilt function in JavaScript which is used to compare any two elements
and returns a positive number if the reference string is lexicographically greater than the compare string and
negative number if the reference string is lexicographically smaller than the compare string and zero (0) if
the compare and reference strings are equivalent. */

let lexicographicCompare = (hacker1.localeCompare(hacker2) < 0) ? "The driver's name goes first." :
(hacker1.localeCompare(hacker2) > 0) ? "Yo, the navigator goes first definitely." : "What?! You both got the same name?"
console.log(lexicographicCompare)