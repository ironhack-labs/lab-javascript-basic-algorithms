// Iteration 1: Names and Input

let hacker1 = "brea";
console.log(`The driver's name is ${hacker1}.`)
let hacker2 = "maya";
console.log(`The driver's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

// 3.1
console.log(hacker1.split("").join(" ").toUpperCase())

// 3.2
console.log(hacker2.split("").reverse().join(""))

//3.3
/* I spent a lot of time thinking of how to do this exercise with some method combination too and only then realised 
that I wasn't being directly asked for the name with the higher leicographical order.

Here's how that looks
console.log((hacker1 + " " + hacker2).split(" ").sort()[0])

*/
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
}
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}