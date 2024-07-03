// Iteration 1: Names and Input
const driver = "Madoka";
console.log(`The driver's name is ${driver}`);
const navigator = "Homura";
console.log(`The navigator's name is ${navigator}`);


// Iteration 2: Conditionals
const charLen1 = driver.length
const charLen2 = navigator.length

if (charLen1 > charLen2) {
    console.log(`${driver} has the longest name, it is ${charLen1} characters` );
}
else if (charLen1 < charLen2) {
    console.log(`It seems that ${navigator} has the longest name, it has ${charLen2} characters`);
}

else if (charLen1 === charLen2) {
    console.log(`Wow, you both hace equally long names, ${charLen1} characters!`);
}

// Iteration 3: Loops
//Vertical Capitalized Print
const driverCaps = driver.toUpperCase();
for (let i = 0; i < driverCaps.length; i++) {
    const char = driverCaps[i];
    console.log(char);
}

//Reversed Print
let reversed = "";
for(let j = navigator.length - 1; j >= 0; j--) {
    reversed += navigator[j];
}
console.log(reversed);

//Which goes first
if (driver.localeCompare(navigator) === -1) {
    console.log(`${driver}'s name goes first`);
}

else if (driver.localeCompare(navigator) === 1) {
    console.log(`Yo, ${navigator} goes first, definitely`);
}

else if (driver.localeCompare(navigator) === 0) {
    console.log("What?! You both have the same name?")
}
