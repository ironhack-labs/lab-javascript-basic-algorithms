// Iteration 1: Names and Input
 const hacker1 = "Ana";
 let hackerName1 = `The driver's name is ${hacker1}`
 console.log(hackerName1)


 // Iteration 1: Names and Input
 const hacker2 = "Gara";
 let hackerName2 = `The driver's name is ${hacker2}`
 console.log(hackerName2)

 
// Iteration 2: Conditionals
const driver = "Ana"; // Driver's name
const navigator = "Gara"; // Navigator's name

if (driver.length > navigator.length) {
  console.log(`The driver has the longest name, it has ${driver.length} characters.`);
} else if (driver.length < navigator.length) {
  console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
}


// Iteration 3: Loops

//Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
const driver = "Ana"; 
let spacedName = ""; 

for (let i = 0; i < driver.length; i++) {

  spacedName += driver[i].toUpperCase();
  

  if (i < driver.length - 1) {
    spacedName += " ";
  }
}

console.log(spacedName); 

//Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
const navigator = "Gara"; 
let reversedName = "";

for (let i = navigator.length - 1; i >= 0; i--) {
    reversedName += navigator[i];
}

console.log(reversedName); 



//Depending on the lexicographic order of the strings, print:

const driver = "ana"; 
const navigator = "gara"; 

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let result = ""; 
let minLength = Math.min(driver.length, navigator.length);


for (let i = 0; i < minLength; i++) {
  const driverIndex = alphabet.indexOf(driver[i]);
  const navigatorIndex = alphabet.indexOf(navigator[i]);

  if (driverIndex < navigatorIndex) {
    result = "The driver's name goes first.";
    break;
  } else if (driverIndex > navigatorIndex) {
    result = "Yo, the navigator goes first, definitely.";
    break;
  }
}

if (result === "") {
  if (driver.length < navigator.length) {
    result = "The driver's name goes first.";
  } else if (driver.length > navigator.length) {
    result = "Yo, the navigator goes first, definitely.";
  } else {
    result = "What?! You both have the same name?";
  }
}

console.log(result);
