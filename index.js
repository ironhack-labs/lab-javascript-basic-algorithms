// Iteration 1: Names and Input

const hacker1 = "john"
console.log(`the drivers name is ${hacker1}`)

const hacker2 = "felipe"
console.log(`the navigator is ${hacker2}`)
// Iteration 2: Conditionals

let number1
let number2

number1 = hacker1.length
number2 = hacker2.length

console.log(number1, number2)




if (hacker1.length > hacker2.length) {

    console.log(`the driver has the longest name, it has ${number1} character`)
}

else if (hacker1.length < hacker2.length) {
    console.log(`it seems that the navigator has the longest name, it has ${number2} characters. `)
}
else if (hacker1.length == hacker2.length) {
    console.log(`wow, you both have equally long names, ${number1} characters!`)
}



// Iteration 3: Loops
let nombredelhacker = ""

for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1[i]
    nombredelhacker += char.toUpperCase() + " "
}

console.log(nombredelhacker)


console.log("\n")

let nombredelhacker2 = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
    const char = hacker1[i]
    nombredelhacker2 += char + " "
}
console.log(nombredelhacker2)



if (hacker1 < hacker2) {

    console.log(`the drivers name go first`)
}

else if (hacker1 > hacker2) {
    console.log(`yo, the navigator go first, feinitely`)
}
else {
    console.log(`what?!, you both have the same name`)
}