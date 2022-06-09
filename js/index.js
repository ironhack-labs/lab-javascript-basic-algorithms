// Console test: console.log("I'm ready!");
// Iteration 1: Names and Input
console.log("Iteration 1: Names and Input");

let hacker1 = "Tom";
console.log("The driver's name is", hacker1);
let hacker2 = "Jerry";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
console.log("\nIteration 2: Conditionals");

let driver = hacker1.length;
let navigator = hacker2.length;
if (driver > navigator){
    console.log(`The driver has the longest name, it has ${driver} characters.`);
} else if (navigator > driver){
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${driver}`);
}

// Iteration 3: Loops
console.log("\nIteration 3: Loops");
// 3.1
let upperDriver = "";
for (char of hacker1){
    upperDriver += char.toUpperCase() + " "; 
}
console.log("3.1:",upperDriver.trim());
// 3.2
let reverseNavigator = "";
let substractor = 1;
for (let i = 0; i < navigator; i++){
    reverseNavigator += hacker2[navigator - substractor];
    substractor += 1;
}
console.log("3.2:",reverseNavigator);
// 3.3
let order = hacker1.localeCompare(hacker2);
if (order === -1){
    console.log("3.3: The driver's name goes first.");
} else if (order === 1){
    console.log("3.3: Yo, the navigator goes first definitely.");
} else {
    console.log("3.3: What?! You both have the same name?");
}