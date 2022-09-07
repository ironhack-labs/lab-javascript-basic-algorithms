// Iteration 1: Names and Input
//
const hacker1 = "Volodymyr";
const hacker2 = "Mog";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} 
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let hacker1Upper = hacker1.toUpperCase();
let hacker2Reverse;
let hacker1Result = '';
let hacker2Result = '';

for (i=0; i<hacker1.length; i++) {
    
    hacker1Result = hacker1Result + hacker1Upper.charAt(i) + ' ';
}
for (let i = hacker2.length; i>=0; i--) {
    hacker2Result = hacker2Result + hacker2.charAt(i);
}
console.log(hacker1Result);
console.log(hacker2Result);

let orderHackers = hacker1.localeCompare(hacker2);
switch (orderHackers) {
    case -1:
        console.log("The driver's name goes first.");
    break;
    case 1:
        console.log("Yo, the navigator goes first definitely.");
    break;
    case 0:
        console.log("What?! You both have the same name?");
    break;
}

