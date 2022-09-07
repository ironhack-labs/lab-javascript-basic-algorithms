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

// 3.1
let hacker1_upper = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1_upper += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(hacker1_upper);



// 3.2
let hacker2_reverse = "";
for (let i = hacker2.length; i > 0; i--) {
    hacker2_reverse += hacker2.charAt(i-1);
}
console.log(hacker2_reverse);



// 3.3

if (hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}

