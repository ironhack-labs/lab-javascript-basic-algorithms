// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops
//Exercise 1


const hacker1 = "Victor"
console.log(`The driver name is ${hacker1}`)

const hacker2 = "Marta"
console.log(`The navigator name is ${hacker2}`)

//Exercise 2

const long1 = hacker1.length
const long2 = hacker2.length

if (long1 > long2) {
    console.log(`The driver has the longest name, it has ${long1}  characters.`)
}
else if (long1 < long2) {
    console.log(`It seems that the navigator has the longest name, it has ${long2} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${long1, long2} characters!`)
}

//Exercise 3
let output = ""

for (let i = 0; i < hacker1.length; i++) {
    const spell = hacker1[i].toUpperCase()
    output += spell
}

console.log(output)

console.log("-----------------------------------------")

let outPut = ""
const lastIndex = hacker2.length - 1
for (let i = lastIndex; i >= 0; i--) {
    const char = hacker2[i]
    outPut += char
}

console.log(outPut)