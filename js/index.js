// Iteration 1: Names and Input
const hacker1 = 'Miguel';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Jaime';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}




// Iteration 3: Loops
let nameSeparated = '';
for (let i = 0; i < hacker1.length; i++){
    nameSeparated+= hacker1[i];
    if (i !== hacker1.length - 1){
        nameSeparated+= ' ';
    }
}
console.log(nameSeparated.toUpperCase());

let nameReversed = '';
for (let i = hacker1.length - 1; i >= 0; i--){
    nameReversed += hacker1[i];
}
console.log(nameReversed);
/*Shorter way:
let splittedName = hacker1.split(""); 

let reversedArrayName = splittedName.reverse();

console.log(reversedArrayName.join(""));
*/



if (hacker1.localeCompare(hacker2) === 0){
    console.log('What?! You both have the same name?');
} else if (hacker1.localeCompare(hacker2) === 1){
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log("The driver's name goes first.");
}
