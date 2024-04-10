// Iteration 1: Names and Input
const hacker1 = "Agueda"
const hacker2 = "Agueda"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops
//3.1. mostrar caracteres de hacker1 mayúsc y separados
let hacker1Cap = "";
for ( let i=0; i < hacker1.length; i++) {
    hacker1Cap += `${hacker1[i].toUpperCase()} `
}

console.log(hacker1Cap)

//3.2. mostrar hacker2 inverso
let hacker2Inversed = "";
for ( let i=hacker2.length -1; i >= 0; i-- ) {
    hacker2Inversed += `${hacker2[i]}`
}
console.log(hacker2Inversed)

//3.3 orden alfabético
let minChar = 0;

if(hacker1.length > hacker2.length){
    minChar = hacker1.length
}else if(hacker1.length < hacker2.length) {
    minChar = hacker2.length
}else{
    minChar = hacker1.length
}
console.log(minChar)

for (let i = 0; i<minChar; i++) {
    console.log(hacker1[i], hacker2[i])
    if (hacker1[i] < hacker2[i]){
        hackerOr = hacker1
        console.log("The driver's name goes first.")
        break
    }else if (hacker1[i] > hacker2[i]){
        hackerOr = hacker2
        console.log("Yo, the navigator goes first, definitely.")
        break
    }
}

if(hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
}
