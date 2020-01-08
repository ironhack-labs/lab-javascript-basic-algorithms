// Iteration 1: Names and Input

let hacker1 = "Kathleen";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Guillaume";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name. It has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let capitalStr = ""
for (i=0; i < hacker1.length; i++) {
    capitalStr += " " + hacker1.charAt(i);
}
console.log(capitalStr.toUpperCase());

// 3.2
let reverseStr = ""
for (i=hacker2.length-1; i >= 0; i--) {
    reverseStr += hacker2.charAt(i);
}
console.log(reverseStr);

// 3.3

if (hacker2.localeCompare(hacker1)) {
    console.log(`The driver's name goes first.'`);
} else if (hacker1.localeCompare(hacker2)){
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

