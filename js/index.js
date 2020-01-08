// Iteration 1: Names and Input
var hacker1 = "Anthony";
console.log(`The driver's name is ${hacker1}.`);

var hacker2 = "Anthony";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);

// Iteration 3: Loops

let newDriverName = '';
for (let i = 0; i < hacker1.length; i++) {
    newDriverName += hacker1[i].toUpperCase() + ' ';
}
console.log(newDriverName);

let newNavigatorName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigatorName += hacker2[i];
}
console.log(newNavigatorName);


function compareNames(driver, navigator) {
    const doNotComeFirst = driver.localeCompare(navigator);
    if (doNotComeFirst === -1) return "The driver's name goes first.";
    else if (doNotComeFirst === 1) return "Yo, the navigator goes first definitely.";
    else return "What?! You both have the same name?";
}

console.log(compareNames(hacker1, hacker2));