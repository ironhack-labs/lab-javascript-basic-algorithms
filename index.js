// Iteration 1: Names and Input

const hacker1 = prompt("Enter driver's name")
console.log(`The driver's name is ${hacker1}.`)

const hacker2 = prompt("Enter the navigator's name")
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

const hacker1Capitals = hacker1.toUpperCase()

let name = ""

for (let i = 0; i < hacker1Capitals.length; i++) {
    name += `${hacker1Capitals[i]} `
}
console.log(name)



let name2 = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    name2 += `${hacker2[i]} `
}
console.log(name2)



if (hacker1[0] < hacker2[0]) {
    console.log(`The driver's name goes first.`)
} else if (hacker1[0] > hacker2[0]) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}
