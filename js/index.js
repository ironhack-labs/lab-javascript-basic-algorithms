// Iteration 1: Names and Input
const hacker1 = "Ricardo";
const hacker2 = "Sebastian";
console.log(`"The driver's name is ${hacker1}"`);
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
    console.log(
        `The driver has the longest name, it has ${driverLength} characters.`
    );
} else if (driverLength < navigatorLength) {
    console.log(
        `It seems that the navigator has the longest name, it has ${navigatorLength} characters.`
    );
} else {
    console.log(
        `Wow, you both have equally long names, ${driverLength} characters!`
    );
}

// Iteration 3: Loops
let separatedDriver = "";
for (let i = 0; i < hacker1.length; i++) {
    separatedDriver += hacker1[i] + " ";
    upercasedDriver = separatedDriver.toUpperCase();
}
console.log(upercasedDriver);

let reverseNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseNavigator += hacker2[i];
}
console.log(reverseNavigator);

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("The driver's name goes first.");
}
