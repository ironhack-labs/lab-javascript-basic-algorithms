// Iteration 1: Names and Input

let hacker1 = ("Jan");
console.log(`The driver's name is ${hacker1}`);

let hacker2 = ("Bert");
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length == hacker2.length) {
    console.log(`Wow, both have equally long names, ${hacker1.length} characters!`);
  } else if (hacker1.length >= hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length <= hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  };

// Iteration 3: Loops

// 3.1
var nameOfDriver = "";
for (let i = 0; i < hacker1.length; i++) {
  nameOfDriver += hacker1[i].toUpperCase() + " ";
}
console.log(nameOfDriver);

// 3.2
var reversedNameOfNavigator = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  reversedNameOfNavigator += hacker2[i];
}
console.log(reversedNameOfNavigator);

// 3.3
if (hacker2.localeCompare(hacker1) === 1) {
    console.log("The driver's name goes first.");
  } else if (hacker2.localeCompare(hacker1) === 0) {
    console.log("What?! You both have the same name?");
  } else if (hacker2.localeCompare(hacker1) === -1) {
    console.log("Yo, the navigator goes first definitely.")
  }


