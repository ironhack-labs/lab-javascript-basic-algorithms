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

const space = " "
let name = ""

for (let character = 0; character < hacker1.length; character++ ){
    name += hacker1[character].toUpperCase()
    name += space
}
console.log(name)


name = ""
for (let i = (hacker2.length - 1); i >= 0; i--) {
    name += hacker2[i]
}
console.log(name)


let compare = 'hacker1'.localeCompare('hacker2')
if (compare > 0){
    console.log(`The driver's name goes first.`)
} else if (compare < 0){
    console.log(`Yo, the navigator does first definitely.`)
} else if (compare === 0){
    console.log(`What?! You both have the same name?`)
}