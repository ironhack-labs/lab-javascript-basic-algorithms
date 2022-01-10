// Iteration 1: Names and Input
const hacker1 = 'aaaaaaaaa';
console.log(`The driver's name is ${hacker1}`)
const hacker2 = 'aaaaaa'
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditional=

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

let nameToUpperCase = ''
for (let i = 0; i < hacker1.length; i++) {
    nameToUpperCase += `${hacker1.charAt(i).toUpperCase()}  `
}

let reversedName = ''
for (let i = hacker1.length - 1; i >= 0; i--) {
    reversedName += `${hacker1[i]}`
}
console.log(reversedName)

// Iteration 3: Loops

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
}
else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first definitely.`)
}
else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`)
}