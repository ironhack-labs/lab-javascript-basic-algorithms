// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops
//Exercise 1

const hacker1 = "Victor"
console.log("The driver's name is ", hacker1)

const hacker2 = "Oscar"
console.log(`The navigator's name is ${hacker2}`)

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

for (let i = 0; i < hacker1.length; i++) {
    const spell = hacker1[i]
    console.log(spell)

}
console.log("      ")

const lastIndex = hacker1.length - 1
for (let i = lastIndex; i >= 0; i--) {
    const char = hacker1[i]
    console.log(char)
}
