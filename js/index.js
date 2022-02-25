// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Chris";

//1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`);

//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Tom";

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The navigator's name is ${hacker2}"`)


// Iteration 2: Conditionals


//2.1. Depending on which name is longer, print:

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters!`)
  } else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it was ${hacker2.length} characters!`)
  } else {
    console.log(`Wow, you both have equally long names`)
  }
  

// Iteration 3: Loops


//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

const hacker1Splitted = hacker1.split("");
const hacker1Space = hacker1Splitted.join(" ");
const upperCasedHacker1 = hacker1Space.toUpperCase();

console.log(upperCasedHacker1) 
// Question: How can I make a loop out of hacker1? //


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

const hacker2Splitted = hacker2.split("");
const reverseHacker2 = hacker2Splitted.reverse();
const joinedHacker2 = reverseHacker2.join("")

console.log(joinedHacker2)


// 3.3 Depending on the lexicographic order of the strings, print:

