// Iteration 1: Names and Input

const hacker1 = "Héctor"

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Emma"

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}

// Iteration 3: Loops

let letterName = ""


for (let i = 0; i < hacker1.length; i++) {
    letterName += hacker1.toUpperCase().charAt(i)
    letterName += " "
}

console.log(letterName.slice(0, 11))

let letterName2 = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    letterName2 += hacker2.charAt(i)
}

console.log(letterName2)

for (let i = 0; i < hacker2.length; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.")
        break;
    } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first definitely.")
        break;
    } else if (hacker1 === hacker2) {
        console.log("What?! You both have the same name?")
        break;
    }
}

/*

let names = ["Héctor","Emma"];

let orderNames = names.sort()

console.log(orderNames)

let names2 = ["Héctor", "Emma"];

if (orderNames === names2) {
    console.log("The driver's name goes first.")
} else if (orderNames != names2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("Ciao")
} 
*/