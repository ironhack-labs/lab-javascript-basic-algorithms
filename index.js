//Iteration 1: Names and Input
//1.1
const hacker1 = "Nuno SteelHacker";
//1.2
console.log("The driver name is " + hacker1);
//1.3
const hacker2 = "João";
//1.4
console.log("The navigator name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//Iteration 3: Loops
//3.1
let separatedUppercase = "";
for (let i = 0; i < hacker1.length; i++) {
    separatedUppercase += hacker1[i].toUpperCase() + " ";
}
console.log(separatedUppercase);
//3.2
let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName)
//3.3 
const nameComparison = hacker1.localeCompare(hacker2);
if(nameComparison < 0) {
    console.log("The driver's name goes first.");
}
else if(nameComparison > 0) {
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?");
}