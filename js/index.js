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
//3.1
var newDriverName = "";
for (var i = 0; i < driverLength; i++) {
  if (i === driverLength - 1) {
    newDriverName += hacker1[i].toUpperCase();
    continue;
  }
  newDriverName += hacker1[i].toUpperCase() + " ";
}

console.log(newDriverName);

//3.2
var newNavigatorName = "";
for (var i = navigatorLength - 1; i >= 0; i--) {
  if (i === 0) {
    newNavigatorName += hacker2[i].toUpperCase();
    continue;
  }
  newNavigatorName += hacker2[i];
}

console.log(newNavigatorName);

//3.3
var shortestNameValue;
if (driverLength > navigatorLength) {
  shortestNameValue = driverLength;
} else if (driverLength < navigatorLength) {
  shortestNameValue = navigatorLength;
} else {
  shortestNameValue = driverLength;
}
for (var i = 0; i < shortestNameValue; i++) {
  if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
    console.log("What?! You both have the same name?");
    break;
  } else if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  }
}
