// Iteration 1: Names and Input

const hacker1 = "Joy";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "alsoJoy";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function compareNameLength(driver, navigator) {
  if (driver.length > navigator.length) {
    console.log(
      `The driver has the longest name, it has ${driver.length} characters.`
    );
  } else if (driver.length < navigator.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${navigator.length}.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${driver.length} characters.`
    );
  }
}

compareNameLength(hacker1, hacker2);
compareNameLength("Juan", "Alberto");
compareNameLength("Banana", "Ana");
compareNameLength("Omar", "Anna");

// Iteration 3: Loops

let capName1 = "";

for (let i = 0; i < hacker1.length; i++) {
  capName1 += hacker1[i].toUpperCase() + " ";
}

let capName2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  capName2 += hacker2[i].toUpperCase() + " ";
}

console.log(capName1);
console.log(capName2);

function sortName(driver, navigator) {
  if (driver.localeCompare(navigator) === -1) {
    console.log("The driver's name goes first.");
  } else if (driver.localeCompare(navigator) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}

sortName(hacker1, hacker2);
