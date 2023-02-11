// Iteration 1: Name and Input
let hacker1 = "Paul";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters. `)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the lomgest name, it has ${hacker2.length} characters. `)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters! `)
}
// Iteration 3: Loops 
//3.1
let hacker1UpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1UpperCase += `${hacker1[i].toUpperCase()} `
}
console.log(hacker1UpperCase)

//3. 2

let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i]
}
console.log(hacker2Reverse)

//3.3 

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}