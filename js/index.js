// Iteration 1: Names and Input
var hacker1 = prompt("Write driver's name:");
console.log("The driver's name is", hacker1);

var hacker2 = prompt("Write navigator's name:");
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
var driverLength = hacker1.length;
var navigatorLength = hacker2.length;

if (driverLength === navigatorLength) {
  console.log("Wow, you both have equally long names,", driverLength, "characters!");
} else if (driverLength > navigatorLength) {
  console.log("The driver has the longest name, it has", driverLength, "characters.");
} else if (driverLength < navigatorLength) {
  console.log("It seems that the navigator has the longest name, it has", navigatorLength, "characters.");
}

// Iteration 3: Loops
var newDriverName = "";
for (var i = 0; i < driverLength; i++) {
  if (i === driverLength - 1) {
    newDriverName += hacker1[i].toUpperCase();
    continue;
  }
  newDriverName += hacker1[i].toUpperCase() + " ";
}

console.log(newDriverName);
