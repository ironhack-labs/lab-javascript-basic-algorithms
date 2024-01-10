// Iteration 1: Names and Input
const hacker1 = "Joy";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "also Joy";
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
