// Iteration 1: Names and Input
const driver = "Karla";
const navigator = "Philipp";

console.log(`the driver's name is ${driver}.`);
console.log(`the navigator's name is ${navigator}.`);


// Iteration 2: Conditionals
if (driver.length > navigator.length) {
  console.log(
    `The driver has the longest name, it has ${driver.length} characters`
  );
} else if (driver.length < navigator.length) {
  console.log(
    `The navigator has the longest name, it has ${navigator.length} characters`
  );
} else {
  console.log(`The both are equally long names, ${driver.length} characters`);
}

// Iteration 3: Loops
let driverInUpperCase = "";
let navigatorInReverse = "";

for (let i = 0; i <= driver.length; i++) {
  driverInUpperCase += driver.charAt(i).toUpperCase() + " "
};
console.log(driverInUpperCase);

for (let i = navigator.length; i >= 0; i--) {
  navigatorInReverse += navigator.charAt(i);
};
console.log(navigatorInReverse);

if (driver > navigator) {
  console.log("The driver's name goes first.")
} else if (driver < navigator) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}




