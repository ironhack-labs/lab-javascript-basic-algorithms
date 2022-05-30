// Iteration 1: Names and Input
let hacker1 = "Joao";
console.log("The Driver's name is " + hacker1);
let hacker2 = "Pedro"
console.log("The Navigator's name is " + hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){

    console.log('The driver has the longest name, it has' + hacker1.length + 'characters');
} else if (hacker1.length < hacker2.length) { 
console.log('It seems that Navigator has the longest name, it has ' + hacker2.length + ' characters');
} else {
    console.log('Wow you both equally long names' + hacker1.length + 'characters');
}

// Iteration 3: Loops
const capital = hacker1.split('').join(' ').toUpperCase();

console.log(capital);

const reverse = hacker1.split('').reverse(' ').join();

console.log(reverse);

let alphabetical = hacker1.split('');
 


console.log(hacker1.localeCompare(hacker2));

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if(hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}


