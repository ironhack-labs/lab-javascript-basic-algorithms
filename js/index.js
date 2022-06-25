console.log("I'm ready");
// Iteration 1: Names and Input
const hacker1 = "Mark";
console.log("The driver's name is " + hacker1);
const hacker2 = "Oscar";
console.log("The driver's name is " + hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
// Iteration 3: Loops
let spacedName = "";
for (let i = 0 ; i <= hacker1.length -1 ; i++){
    spacedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedName);

let reverseName = "";
for (let i = hacker1.length - 1 ; i >= 0 ; i--){
    reverseName += hacker1[i];
}
console.log(reverseName);

if (hacker1.localeCompare(hacker2) > 0{
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else {
    console.log("What?! You both have the same name?");
}