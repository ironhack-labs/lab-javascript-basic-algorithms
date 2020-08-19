// Iteration 1: Names and Input
let hacker1 = "Niko"
console.log("The driver's name is " + hacker1)
let hacker2 = "Juan"
console.log("The navigator's name is " + hacker1)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The driver has the longer name, it has ' + hacker1.length +' characters.')
} else if (hacker1.length < hacker2.length) {
    console.log('It seems that the navigator has the longest name, it has ' + hacker2.length +' characters.')
} else {
    console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!')
}

// Iteration 3: Loops
let result1 = ""
for (let i = 0; i < hacker1.length; i++) {
    result1 += hacker1.charAt(i) + " "
}

console.log(result1.toUpperCase().trim())

let result2 = ""
for (let i = hacker2.length-1; i >= 0; i--){
    result2 += hacker2.charAt(i)
}

console.log(result2)

let sortedArray = [hacker1, hacker2]
sortedArray.sort()

if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?")
} else if (sortedArray[0] == hacker1) {
    console.log("The driver's name goes first.")
} else {
    console.log("Yo, the navigator goes first definitely.")
}