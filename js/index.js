// Iteration 1: Names and Input
let driver = "Natalia";
let navigator = "Guillem";

console.log(`The driver's name is ${driver}`);
console.log(`The navigator's name is ${navigator}`);


// Iteration 2: Conditionals
if (driver.length > navigator.length) {
    console.log(`Driver has the longest name, it has ${driver.length} characters.`);
  } else if (navigator.length > driver.length) {
    console.log(`navigator has the longest name, it has ${navigator.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
  }
  

// Iteration 3: Loops
console.log(driver.split('').join(' ').toUpperCase());

console.log(driver.split('').reverse().join(''));