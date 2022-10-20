// Iteration 1: Names and Input
//

let hacker1 = "victor"
console.log(`the drivers name is ${hacker1}`)
let hacker2 = "alexis"
console.log(`the navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (
    hacker1.length > hacker2.length
) { console.log(`It has ${hacker1.length} characters`) }
else if (
    hacker2.length > hacker1.length
) { console.log(`It has ${hacker2.length} characeters`) }
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characeters`)
}


// Iteration 3: Loops


hacker1 = hacker1.toUpperCase()

let word = ""
for (let i = 0; i < hacker1.length; i++) {
    word += hacker1[i] + " "

}
console.log(word)
