console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = 'Elizabeth';
console.log(`"The driver's name is ${hacker1}"`);
const hacker2 = 'Anna';
console.log(`"The navigator's name is ${hacker2}`);
//

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    } else if (hacker2.length < hacker2.length) {
        console.log(`It seems that the the navigator has the longest name, it has ${hacker2.length} characters`); 
        } else {
            console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
//

// Iteration 3: Loops

let hacker1ToCaps = '';
for(i = 0; i < hacker1.length; i++) {
    hacker1ToCaps += hacker1[i].toUpperCase() + ' ';
}
console.log(hacker1ToCaps);

let hacker2Reverse = '';
for (i = hacker2.length-1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

if (hacker1.slice(1) > hacker2.slice(1)) {
    console.log(`The driver's name goes first.`);
    } else if (hacker1.slice(1) < hacker2.slice(1)) {
        console.log(`Yo, the navigator goes first definitely`);
        } else {
            console.log(`What?! You both have the same name?`);
 }
//