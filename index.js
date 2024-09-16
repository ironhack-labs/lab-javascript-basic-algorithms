// Iteration 1: Names and Input
const hacker1 = "Alejandro"
console.log(hacker1)
const hacker2 = "Jerónimo"
console.log(hacker2)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`)
}

// Iteration 3: Loops

let hacker1Spaced = ""
let hacker2Reversed = ""
for (let i = 0; i < hacker1.length; i++) {
    hacker1Spaced += hacker1[i].toUpperCase() + " "


}
console.log(hacker1Spaced.trim())


for (let j = hacker2.length - 1; j >= 0; j--) {
    hacker2Reversed += hacker2[j]

}

console.log(hacker2Reversed)

let hacker1Counter = 0
let hacker2Counter = 0
for (let k = 0; k < hacker1.length; k++) {
    if (hacker1[k] < hacker2[k]) {
        console.log("The driver's name goes first.")
        hacker1Counter++
        break
    }
    else if (hacker1[k] > hacker2[k]) {
        console.log("Yo, the navigator goes first definitely.")
        hacker2Counter++
        break
    }
    else if (hacker1[k] === hacker2[k]) {
        continue
    }
}
if (hacker1Counter === 0 && hacker2Counter === 0) {
    console.log('What?! You both have the same name?')
}

