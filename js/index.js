// Iteration 1: Names and Input

let hacker1 = "Eduard"
console.log("The driver's name is " + hacker1)

let hacker2 = "Patricia"
console.log("The navigator's name is " + hacker2)

//
// Iteration 2: Conditionals

// 2.1

if (hacker1.length > hacker2.length) {

    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")

}else if (hacker1.length < hacker2.length) {

    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")

}else if (hacker1.length === hacker2.length) {

    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}


// Iteration 3: Loops

// 3.1

console.log(hacker1.toUpperCase().split("").join(' '))

// 3.2

console.log(hacker2.split("").reverse().join(""))

// 3.3

let hacker1Letter = hacker1.split("")
let hacker2Letter = hacker2.split("")

if (hacker1Letter[0] > hacker2Letter[0]) {
    console.log("The driver's name goes first.")
} else if (hacker1Letter[0] < hacker2Letter[0]) {
    console.log("Yo, the navigator goes first definetly.")
}else if (hacker1Letter === hacker2Letter) {
    console.log("What?! You both have the same name?")
}