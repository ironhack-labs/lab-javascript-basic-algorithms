// Iteration 1: Names and Input

const hacker1 = "Andrea"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Antonio"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The hacker has the longest name, it has ${hacker1.length} characters.`)
}

else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)

}


// Iteration 3: Loops


const driver = hacker1.toUpperCase()
let result = ""

for (let i = 0; i < driver.length; i++) {
    result += driver[i] + ' '

}
console.log(result)


let reverse = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverse += hacker1[i]
}

console.log(reverse)