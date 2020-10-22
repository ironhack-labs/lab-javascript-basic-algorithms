// Iteration 1: Names and Input

const hacker1 = 'Carlos García'
console.log(`The driver's name is ${hacker1}.`)

const hacker2 = 'Ángela Herrador'
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker2.length > hacker1.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {

    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)

}




// Iteration 3: Loops

//3.1

let emptyString0 = ''

for (let i = 0; i < hacker1.length; i++) {

    emptyString0 += hacker1[i].toUpperCase() + ' '

}

console.log(emptyString0)




//3.2

let emptyString1 = ''

for (i = hacker2.length - 1; i >= 0; i--) {

    emptyString1 += hacker2[i]

}

console.log(emptyString1)




//3.3

const sentence1 = "The driver's name goes first."

const sentence2 = "Yo, the navigator goes first definitely."

const sentence3 = " What?! You both have the same name?"