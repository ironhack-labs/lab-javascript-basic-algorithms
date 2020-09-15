// Iteration 1: Names and Input
let hacker1 = "BobDylan"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "MichaelJackson"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let space=" "
let hacker1Caps= ""
for (i=0; i<hacker1.length; i++)
{hacker1Caps=hacker1Caps+hacker1[i].toUpperCase() + space}
{console.log(hacker1Caps)};

let hacker2Reverse=""
for(i=hacker2.length-1; i>=0; i--)
{hacker2Reverse=hacker2Reverse+hacker2[i]}
{console.log(hacker2Reverse)};

// Iteration 3: Loops
let result = hacker1.localeCompare(hacker2);
if (result < 0){console.log(`The driver's name goes first.`)}
else if (result > 0){console.log(`Yo, the navigator goes first definitely.`)}
else {console.log(`What?! You both have the same name?`)}