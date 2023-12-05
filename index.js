console.log("I´m ready")

// Iteration 1: Names and Input.

// Create a variable hacker1 with the driver's name.

let hacker1 = "Jose Ramon"

// Print "The driver's name is XXXX".

console.log(`The driver's name is ${hacker1}`);

// Create a variable hacker2 with the navigator's name.

let hacker2 = "Julio"

// Print "The navigator's name is YYYY".

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals.

// Depending on which name is longer, print:

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}.`)
}

// Iteration 3: Loops.

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters.

let newDriverName = "";

for (let i = 0; i < hacker1.length; i++) {
  newDriverName += hacker1[i].toUpperCase() + " ";
}

console.log(newDriverName);

// 3.2 Print all the characters of the navigator's name in reverse order.

let newNavigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorName += hacker2[i];
}

console.log(newNavigatorName);

/* 3.3
Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
  } else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely")
  } else {
    console.log("What?! You both have the same name?")
  }
  