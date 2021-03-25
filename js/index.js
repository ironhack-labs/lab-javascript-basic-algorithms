// Iteration 1: Names and Input
console.log("I'm ready!");

const hacker1 = "Pablo";
console.log(`The driver´s name is ${hacker1}`)
const hacker2 = "Paula";
console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals

function findLongName(name1, name2) {
    if (name1.length > name2.length) {
        console.log(`The driver has the longest name, it has ${name1.length} characters.`)
    }
    else if (name1.length < name2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${name2.length} characters.`)
    }
    else {
        console.log(`Wow, you both have equally long names, ${name1.length} characters!`)
    }
}
findLongName(hacker1, hacker2)

// Iteration 3: Loops


for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase())
}

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i])
}

let order = hacker1.localeCompare(hacker2)
switch (order) {
    case "order > 0":
        console.log("The driver's name goes first")
        break;
    case "order < 0":
        console.log("Yo, the navigator goes first definitely.")
        break;
    case "order = 0":
        console.log("What?! You both have the same name?")
        break;
    default:
        console.log("x")