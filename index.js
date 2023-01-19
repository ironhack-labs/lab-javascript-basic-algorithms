// Iteration 1: Names and Input

const hacker1 = prompt('What is your name?')
console.log(`The driver's name is ${hacker1}`)

const hacker2 = prompt('What is your navigators name?')
console.log(`The navigator name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else { console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) }

// Iteration 3: Loops

let nameMayus = ""

for (i = 0; i <= hacker1.length - 1; i++) {
    nameMayus += hacker1[i].toUpperCase() + " "
}

console.log(nameMayus)

let nameReverse = ""

for (i = hacker2.length - 1; i >= 0; i--) {
    nameReverse += hacker2[i]
}

console.log(nameReverse)


const compareLetter = hacker1.localeCompare(hacker2)

switch (compareLetter) {
    case 0:
        console.log("What?! You both have the same name?")
        break

    case 1:
        console.log("Yo, the navigator goes first definitely.")
        break

    case -1:
        console.log("The driver'\s name goes first.")
        break
}