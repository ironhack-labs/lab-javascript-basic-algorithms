// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.

const hacker1 = prompt("write your name here");

// 1.2 Print "The driver's name is XXXX".

console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.

const hacker2 = prompt("write your name here");

// 1.4 Print "The navigator's name is YYYY".

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// The driver has the longest name, it has XX characters./

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} 
  characters`);
}

//It seems that the navigator has the longest name, it has XX characters

if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has 
  ${hacker2.length} characters`);
}

//Wow, you both have equally long names, XX characters!./

if (hacker1.length = hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} 
  characters!`);
}

// Iteration 3: Loops

//Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N"./

let result = ""
  for (let i = 0; i < hacker1.length; i++) {
    let currentLetter = hacker1[i].toUpperCase()
   // console.log(currentLetter.split("").join(" "));/
     if (i > 0) {
     result += ` ${currentLetter}`;
     } else {
     result += currentLetter
     }
  }
console.log(result)

// Print all the characters of the navigator's name in reverse order, i.e., "nhoJ"./

let nameReverse = ""
 for (let j = hacker1.length - 1; j >= 0; j--) {
  let letter = hacker1[j]; 
  nameReverse += letter;
 }
console.log(nameReverse);


//Depending on the lexicographic order of the strings, print:
//The driver's name goes first!
//Yo, the navigator goes first, definitely.
// What?! You both have the same name?

if (hacker1.localeCompare(hacker2)) {
  console.log("The driver's name goes first!");
} else if (hacker2.localeCompare(hacker1)) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}