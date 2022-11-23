// Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1= 'Laura';
let hacker2= 'Lovro';

console.log(`The drivers name is ${hacker1}!`);
console.log(`The navigators name is ${hacker2}!`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker1.length < hacker2.length) {

    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)

} else {

    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!!`)

}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
    let characters = hacker1.charAt(i).toUpperCase();
    console.log(`${characters} `);
}
for (let i = hacker2.length; 0 <= i; i--) {
    let characters = hacker2.charAt(i);
    console.log(`${characters} `);
}

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first");
} else if (hacker2.localeCompare(hacker1) > 0) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both have the same name??")
}