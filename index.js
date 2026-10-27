// Iteration 1: Names and Input
const hacker1 = "Domenica"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Oslo"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let driverName = ""
for (let i = 0; i < hacker1.length; i++){
    driverName += hacker1[i].toUpperCase() + " "
}
console.log(driverName)

let navigatorName = ""
for (let i = hacker2.length - 1; i >= 0; i--){
    navigatorName += hacker2[i]   
}
 console.log(navigatorName)

 const comparison = hacker1.toLowerCase().localeCompare(hacker2.toLowerCase())

 if (comparison < 0) {
    console.log("The driver's name goes first")
} else if (comparison > 0) {
    console.log("Yo, the navigator goes first, definitely")
} else {
    console.log("What?! You both have the same name?")
}