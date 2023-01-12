// Iteration 1: Names and Input
let hacker1 = "Pauli";
let hacker2 = "Paul";

console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} 

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} 

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let result = [];
for (i = 0; i < hacker1.length; i++) {

    result += hacker1[i] + " ";
}
console.log(result.toUpperCase());





let char = [];
const lastIndex = hacker2.length - 1;

for (let i = lastIndex; i >= 0; i--) {
    char += hacker2[i];
}
console.log(char);








let shortestName
if (hacker1.length < hacker2.length) {
    shortestName = hacker1
} else {
    shortestName = hacker2
}

for (i = 0; i < shortestName.length ; i++) {
    if (i == shortestName.length - 1 && hacker1[i] == hacker2[i]) {
        if (hacker1.length == hacker2.length) {
        console.log("What?! You both have the same name?")
        break;
        } else {
            console.log((shortestName === hacker1) ? "The driver's name goes first." : "Yo, the navigator goes first, definitely.");     
    }
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
        break;
    } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first, definitely.");
        break;
    } else continue;
}
}

// this would be a method to not make it so complicated :), but would also not cover the example with the same characters until one name is longer than the other
if (hacker1.localeCompare(hacker2) === -1) console.log("driver first");
else if (hacker1.localeCompare(hacker1) === -1) console.log("navigator first");
else console.log("same name"); 

