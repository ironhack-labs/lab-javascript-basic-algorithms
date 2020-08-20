// Iteration 1: Names and Input

const hacker1 = "xuille"

console.log(`the driver name is ${hacker1}`)

const hacker2 = "Melissa"

console.log(`the navigator name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!.`)
}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {

    let x;
    console.log(hacker1[i].toUpperCase())
    console.log(" ")

}

for (let i = hacker2.length - 1; i >= 0; i--) {

    console.log(hacker2[i])
}



if (hacker1[0] < hacker2[0]) {
    console.log('The drivers name goes first.')
} else if (hacker1[0] > hacker2[0]) {

    console.log('Yo, the navigator goes first definitely. ')
} else {
    console.log('What?! You both have the same name?')
}
