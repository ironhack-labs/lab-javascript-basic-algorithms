console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "Joana";

console.log("The driver's name is " + hacker1);

const hacker2 = "Margarida";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

console.log(hacker1.length);
console.log(hacker2.length);

function checkLength(a, b) {
  if (a.length > b.length) {
    console.log(
      "The driver has the longest name, it has " + a.length + " characters."
    );
  } else if (a.length < b.length) {
    console.log(
      "It seems that the navigator has the longest name, it has " +
        b.length +
        " characters."
    );
  } else {
    console.log("Wow, you both have equally long names");
  }
}

checkLength(hacker1, hacker2);

// Iteration 3: Loops

function printChar(hacker) {
  let letters = "";

  for (let i = 0; i < hacker.length; i++) {
    letters += `${hacker[i].toUpperCase()} `;
  }
  console.log(letters);
}

printChar(hacker1);

/*
let reversedName = ""

for (let i = 0; i < hacker2.length; i++) {
    let sliced = hacker2.slice(-i)
    reversedName += sliced;
}

console.log(reversedName);

*/

function printReversed(hacker) {
  let reversedName = "";

  for (let i = hacker.length - 1; i >= 0; i--) {
    reversedName += `${hacker[i]}`;
  }
  console.log(reversedName);
}

printReversed(hacker2);

function inOrder(a, b) {
  if (a > b) {
    console.log("The driver's name goes first");
  } else if (a < b) {
    console.log("Yo, the navigator goes first definitely");
  } else if (a === b) {
    console.log("What? You both have the same name?");
  }
}

inOrder(hacker1, hacker2);
