// Iteration 1: Names and Input

let hacker1 = "Carlos"

console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Jose Antonio"

console.log(`The driver's name is ${hacker2}.`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
} else if(hacker1.length === hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

let str = "";

[...hacker1].forEach(element => str = str + " " + element.toUpperCase())

console.log(str)

let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]   
}

console.log(reverse) 


cmp = hacker1.localeCompare(hacker2)

if(cmp === -1){
    console.log("The driver's name goes first.")
} else if(cmp === 0){
    console.log("Yo, the navigator goes first definitely.")    
} else {
    console.log("What?! You both have the same name?")
}