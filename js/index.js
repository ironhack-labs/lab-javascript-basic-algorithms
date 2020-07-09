console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'Danny';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Rodrigo';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let newHacker = '';
for (let i = 0; i < hacker1.length; i++) {
    newHacker += hacker1[i] + ' ';
    newHacker = newHacker.toUpperCase();
}
console.log(newHacker)

let newNav = '';
for (let i = hacker2.length -1; i >= 0; i--) {
    newNav += hacker2[i];
}
console.log(newNav);

/*if (hacker1.localeCompare(hacker2) = ) {
    console.log(`The driver's name goes first.`)
} else if (hacker2.localeCompare(hacker1)) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
} */

switch(hacker1.localeCompare(hacker2)) {
    case -1:
        console.log(`The driver's name goes first.`);
        break;
    case 0:
        console.log(`What?! You both have the same name?`);
        break;
    case 1:
        console.log(`Yo, the navigator goes first definitely.`);
        break;
}