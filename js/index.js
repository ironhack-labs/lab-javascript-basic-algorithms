// Iteration 1: Names and Input

let hacker1 = "Jorge";
console.log (`The driver's name is ${hacker1}`);

let hacker2 = "Google Chrome";
console.log (`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else if (hacker1.length === hacker2.length) {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

let hacker1Uppercase = ""

for( let i=0; i < hacker1.length; i++) {
    hacker1Uppercase += hacker1.toUpperCase()[i] + " "
}

console.log (hacker1Uppercase)

let hacker1Reverse = ""

for( let i = hacker1.length; i--; i>=0) {
    hacker1Reverse += hacker1[i]
}

let hacker1And2 = [hacker1, hacker2];
let sortedHackers = hacker1And2.sort();

console.log (sortedHackers);
console.log (sortedHackers[0]);

if (sortedHackers[0] === sortedHackers[1]) {
    console.log ("What?! You both have the same name?");
}

else if (sortedHackers[0] === hacker1) {
    console.log ("The driver's name goes first.");
}

else if (sortedHackers[0] === hacker2) {
    console.log ("Yo, the navigator goes first definitely.");
}