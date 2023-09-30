// Iteration 1: Names and Input
let hacker1 = "Jose";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Xavi";
console.log(`The navigatos's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
else if ( hacker1.length < hacker2.length) {
console.log ("It seems that the navigator has the longest name, it has " + hacker1.length  + " characters.");
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}


// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}

let reversed = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    reversed += hacker1[i];
}
console.log(reversed);

console.log(hacker1.localeCompare(hacker2));

if (hacker1.localeCompare(hacker2) >= 1) { 
    console.log(`Yo, the navigator goes first, definitely.`)
}
else if (hacker1.localeCompare(hacker2) <= 1) {
    console.log(`The driver'\s name goes first.`)
}
else { console.log (`What?! You both have the same name?`)
}