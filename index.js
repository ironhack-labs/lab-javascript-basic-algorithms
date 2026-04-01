// Iteration 1: Names and Input
const hacker1 = "Paco"
const hacker2 = "Elias"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals


if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}

// Iteration 3: Loops

//1
let result = ``

for (let i = 0;  i < hacker1.length; i++) {
    const el = hacker1[i]
    if ( i === hacker1.length-1) {
      
      result += `${el.toUpperCase()}`
      
    } else { result += `${el.toUpperCase()} ` }    
}

console.log(result)

//2
let result2 = ``

for (let i = hacker2.length - 1; i >= 0; i--) {
    const el = hacker2[i]
    result2 += el
}
console.log(result2)

//3

const comparation = hacker1.localeCompare(hacker2, "es", { sensitivity: "base" })

if (comparation === -1) {
    console.log("The driver's name goes first.")
} else if (comparation === 1) {
    console.log("The navigator's name goes first.")
} else {
    console.log("Both names are equal.")
}