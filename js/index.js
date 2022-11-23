// Iteration 1: Names and Input
let hacker1 = "Sarah";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Franzi";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length +" characters!");
} else {
    console.log("There seems to be a problem...");
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driversName = "";
for (let i = 0; i < hacker1.length; i++) {
    driversName += hacker1[i].toUpperCase() + " ";
    //console.log(i);
}
console.log(driversName);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigatorName = "";
const theLetters = [];
for (let i = 0; i < hacker2.length; i++) {
    theLetters.unshift(hacker2[i]);
}
for (let i = 0; i < theLetters.length; i++) {
    navigatorName += theLetters[i];
}
console.log(navigatorName);

// 3.3 Depending on the lexicographic order of the strings, print:
let theDriver = hacker1.toLowerCase();
let theNavigator = hacker2.toLowerCase();
const result = theDriver.localeCompare(theNavigator);

if (result === -1) { // -1 Driver first
    console.log("The driver's name goes first.");
} else if (result == 1) { // 1 Navigator first
    console.log("Yo, the navigator goes first definitely.");
} else { // 0 // Same
    console.log("What?! You both have the same name?");
}