// Iteration 1: Names and Input
const hacker1 = 'Veronica';
const hacker2 = 'Ana';

console.log(`The drivers name is ${hacker1}`);
console.log('The navigators name is ' + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let driversName = '';

for ( let i = 0; i < hacker1.length; i++ ) {
    console.log(hacker1[i])
    driversName += hacker1[i].toUpperCase() + " "
}

driversName = driversName.slice(0,-1)
console.log(driversName)

let hacker2Reversed = '';

for ( let i = hacker2.length - 1; i >= 0; i-- ) {
    hacker2Reversed += hacker2[i]
}

console.log(hacker2Reversed)

if (hacker1.localeCompare(hacker2) == 1) {
    console.log('The drivers name goes first.')
} else if (hacker1.localeCompare(hacker2) == -1) {
    console.log('Yo, the navigator goes first definitely.')
} else {
    console.log('What?! You both have the same name?')
}