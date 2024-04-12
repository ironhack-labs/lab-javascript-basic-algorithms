// Iteration 1: Names and Input
let hacker1 = 'Tuna'
console.log (`The drivers name is ${hacker1}`)

let hacker2 = 'Joaquin'
console.log (`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

let hacker1New = '';

for (i=0; i <= hacker1.length -1; i++) {
     hacker1New = hacker1New + hacker1[i].toUpperCase()
     hacker1New = hacker1New + ' '
}
    console.log(hacker1New)

function compareVariables (hacker1, hacker2) {
    return hacker1.localeCompare(hacker2);

}

let result = compareVariables (hacker1, hacker2);

if (result < 0) {
    console.log (`The drivers name goes first.`)
} else if (result > 0) {
    console.log (`Yo, the navigator goes first, definitely.`)
} else {
    console.log (`What?! You both have the same name?`)
}

