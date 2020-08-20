// Iteration 1: Names and Input


let hacker1 = 'Sergio'
console.log(`The driver's name is ${hacker1}.`)


//Define constant
const hacker2 = "Amanda"
//Show the message
console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)

} else {

    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)

}


// Iteration 3: Loops

let hacker1Up = hacker1.toUpperCase()



let hackerSpace = hacker1Up[0]
for (let i = 1; i < hacker1.length; i++) {
    hackerSpace += " " + hacker1Up[i]
}

console.log(hackerSpace)


// Iteration 3: Loops Reverse

let hackerReverse = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    hackerReverse += hacker2[i]

}
console.log(hackerReverse)


// Iteration 3.3: Compare the lexicographic order of hacker 1 and hacker 2 strings