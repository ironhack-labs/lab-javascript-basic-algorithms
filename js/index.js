// Iteration 1: Names and Input
let hacker1 = "LaraMorgana"
console.log(`"The driver's name is ${hacker1}."`)

let hacker2 = "Jorge"
console.log(`"The navigator's name is ${hacker2}."`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`)
} else if (hacker1.length < hacker2.length) {
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`)
} else {
    console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`)
}

// Iteration 3: Loops

let drivName = hacker1.toUpperCase()

let driverName = drivName.split("")

console.log(driverName)


let navigatorName = " "

for (i = hacker2.length - 1; i >= 0; i--) {

    navigatorName += hacker2[i]

}
console.log(navigatorName)


let theWinner = driverName[0].localeCompare(navigatorName[0]);

if (theWinner = 1) {
    console.log("Yo, the navigator goes first definitely.")
} else if (theWinner = -1) {
    console.log("The driver's name goes first.")
} else {
    console.log("What?! You both have the same name?")
}