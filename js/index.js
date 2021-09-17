// Iteration 1: Names and Input


// Iteration 2: Conditionals
let driver = "Lilli";
let navigator ="TJ";
if (driver.length > navigator.length) {
  console.log(`The driver has the longest name, it has ${driver.length} characters.`)
} else if (driver.length < navigator.length) {
  console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`)
} else if (driver.length === navigator.length) {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
}

// Iteration 3: Loops
let driver = "TJ";
let navigator = "Lilli";

for (let i = 0; i < driver.length; i++) {
  console.log(driver[i].toUpperCase());
}

let backwardNav = "";

/*for (let i = navigator.length - 1; i >= 0; i--) {
  backwardNav += navigator[i];
  console.log(backwardNav);
}*/
console.log(navigator.split("").reverse().join(""))

if (driver.localeCompare(navigator) > navigator.localeCompare(driver)) {
  console.log("The driver's name goes first.");
} else if (navigator.localeCompare(driver) > driver.localeCompare(navigator)) {
  console.log("Yo, the navigator goes first definitely.")
} else if (navigator === driver) {
  console.log("What?! You both have the same name?")
};