// Iteration 1: Names and Input

// 1.1
let hacker1 = "Gabriel"

// 1.2
console.log(`The driver's name is ${hacker1}`)

// 1.3
let hacker2 = "Víctor"

// 1.4
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

// 2.1
if (hacker1.length > hacker2.length) {

    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)

}else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}else{

    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)   
}

// Iteration 3: Loops

// 3.1

let space = ""

for(let i = 0; i < hacker1.length; i++){

    space += hacker1[i] + " "
}

console.log(space.toUpperCase())

// 3.2

let reversed = ""

for(let i = hacker2.length -1; i >= 0; i--){

    reversed += hacker2[i]
}

console.log(reversed)

// 3.3

if(hacker1.localeCompare(hacker2) < 0 ) {
    console.log(`The driver's name goes first.`)

} else if (hacker1.localeCompare(hacker2) > 0 ) {
    console.log(`Yo, the navigator goes first definitely.`)

} else {
    console.log(`What?! You both have the same name?`)

}
