// Iteration 1: Names and Input
const hacker1 = "Chromedriver"
console.log(`The driver´s name is ${hacker1}`)
const hacker2 = "Google Chrome"
console.log(`The navigator´s name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters`)
}

// Iteration 3: Loops
let resultado = ""
for (let i = 0; i < hacker1.length; i++) {
    resultado += `${hacker1[i].toUpperCase()}`
    if (i < hacker1.length - 1) {
        resultado += " "
    }
}
console.log(`"${resultado}"`)

let resultado2 = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
    resultado2 += hacker1[i];  
}
console.log(`"${resultado2}"`)

let resultado3 = hacker1.localeCompare(hacker2);
if (resultado3 === 1){
    console.log("The driver's name goes first.")
} else if (resultado3 === -1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}



