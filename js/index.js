// Iteration 1: Names and Input
let hacker1 = 'Julia';
let hacker2 = 'Alessandra';

console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, she has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, she has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names,  ${hacker1.length} characters!`)
}

// Iteration 3: Loops


let upperCaseName = ' ';

for (let i = 0; i < hacker1.length; i++) {
  upperCaseName += hacker1[i] + ' ';
}
console.log(upperCaseName.toUpperCase());

let reverseName = ' ';

for (let i = (hacker2.length -1); i >= 0; i-- ){
    reverseName += hacker2[i]
}
console.log(reverseName)

switch(hacker2.localeCompare(hacker1)){
case 1 :
    console.log(`The driver's name goes first.`)
    break;
case -1 :
    console.log(`Yo, the navigator goes first definitely.`) 
    break;
case 0 :
    console.log(`What?! You both have the same name?`)
    break;       
}