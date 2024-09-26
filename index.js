// Iteration 1: Names and Input
let hacker1 = 'Andre'
console.log(`The driver's name ${hacker1}`);

let hacker2 = 'Marina'
console.log(`The navigator's name ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the vavigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, we both have equally long names ${hacker1.length} characters`)
}

// Iteration 3: Loops
//3.1
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase())
}

//3.2
let reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversed += hacker2[i];
}
console.log(reversed);

//3.3 
if ('hacker1'.localeCompare('hacker2')) {
console.log('The driver`s name goes first')
}
else if ('hacker2'.localeCompare('hacker1')){
console.log('Yo, the navigator goes first, definitely')
}
else {
    console.log(`What?! You both have the same name?`)
}

















