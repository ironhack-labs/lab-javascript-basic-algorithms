// Iteration 1: Names and Input
//
const hacker1 = "alvaroCarol"

console.log("the driver´s name is", hacker1)

const hacker2 = "alejandro"

console.log("the navigator´s name is", hacker2)

// Iteration 2: Conditionals

function printTheLongestName(name1, name2) {
    if (name1.length > name2.length) {
        console.log("The driver has the longest name, it has ", name1.length, "characters")
    } else if (name1.length < name2.length) {
        console.log("It seems that the navigator has the longest name, it has", name2.length, "characters")
    } else {
        console.log("Wow, you both have equally long names", name1.length, "characters")
    }
}

printTheLongestName(hacker1, hacker2)

// Iteration 3: Loops

let newName = ""
for (let i = 0; i < hacker1.length; i++) {
    newName += hacker1[i].toUpperCase() + " "
}

console.log(newName.trim())

let reverseName = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i]
}

console.log(reverseName)

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker2 > hacker1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}
