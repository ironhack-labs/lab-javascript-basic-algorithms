//iteration 1

const hacker1 = "Cristian"
const hacker2 = "Gio"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

//ireration2
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//iteration3
let newName = ""
for (let iterationIndex = 0, iterationEnd = hacker1.length; iterationIndex < iterationEnd; iterationIndex++) {
    newName += hacker1[iterationIndex] + " ";
}    
console.log(newName.toUpperCase())

newName = ""
for (let iterationIndex = hacker2.length - 1, iterationEnd = 0; iterationIndex >= iterationEnd; iterationIndex--) {
    newName += hacker2[iterationIndex]
}
console.log(newName)

let correct = true
let something = 0
while (correct) {
    if (hacker1[something] < hacker2[something]) {
        console.log(`The driver's name goes first.`)
        correct = false
    } else if (hacker1[something] > hacker2[something]){
        console.log(`Yo, the navigator goes first definitely.`)
        correct = false
    } else if (something === hacker1.length || something === hacker2.length) {
        console.log(`What?! You both have the same name?`)
        correct = false
    } 
    something++
}
    