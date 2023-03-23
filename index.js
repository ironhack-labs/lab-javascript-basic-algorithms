

// Iteration 1: Names and Input

let hacker1 = "Homer"
console.log("The driver's name is Simpson")

let hacker2 = "Marge"
console.log("The navigator's name is Marge")


// Iteration 2: Conditionals
console.log(hacker1.length);
console.log(hacker2.length);

if(hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length +  " characters.");
  } 
else if(hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}


// Iteration 3.1

let withSpaceMethod1 = hacker1.split("");
console.log(withSpaceMethod1);

let homerWithSpaces = withSpaceMethod1.join(" ");
console.log(homerWithSpaces);

let homerWithUpperCase = homerWithSpaces.toUpperCase();
console.log(homerWithUpperCase);

// Iteration 3.2

let wordReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  wordReversed += char;
}
console.log(wordReversed);


/* Solution 2 Using Methods:
let splitName = hacker2.split("");
console.log(splitName);
//Turn string into an array to use reverse method
splitName = ['M', 'a', 'r', 'g', 'e' ];
let reverseName = splitName.reverse();
console.log(reverseName)
*/


// 3.3 lexicographic order of the strings

const hackersArray = ["Marge", "Homer"];
hackersArray.sort();
console.log(hackersArray)
