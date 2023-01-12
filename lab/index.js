// Iteration 1: Names and Input
let hacker1 = prompt("Enter driver's name")
console.log(`The driver's name is ${hacker1}`)
let hacker2 = prompt("Enter navigator's name")
console.log(`The navigators's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`"The driver has the longest name, it has ${hacker1.length} characters"`)
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let i = 0

while (i < hacker1.length) {
    console.log(hacker1[i].toUpperCase())
    i++
    
}

let j = hacker2.length

while (j >= 0) {
    console.log(hacker2[j])
    j--
    
}

if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first")
}

else if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely")
}
else{
    console.log("What?! You both have the same name?")
}
