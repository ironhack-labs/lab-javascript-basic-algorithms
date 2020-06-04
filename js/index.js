// Iteration 1: Names and Input
console.log("I'm ready!")

const hacker1 = "Miriam"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "SoonWoo"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
function isLonger(name1, name2) {
    if (name1.length > name2.length) {
        console.log(`The driver has the longest name, it has ${name1.length} characters.`)
    } else if (name1.length < name2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${name2.length} characters`)
    } else {
        console.log(`Wow, you both have equally long names, ${name1.length} characters!`)
    }
}

isLonger(hacker1, hacker2)

// Iteration 3: Loops
// print each character
function characterName(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i].toUpperCase())
    }
}
characterName(hacker1)

//print reverse
function characterName(name) {
    for (let i = name.length; i >= 0; i--) {
        console.log(name[i])
    }
}
characterName(hacker1)

//lexicographic order
function lexicCompare(name1, name2) {
    if (name1.localeCompare(name2) === -1) {
        console.log('The driver\'s name goes first.')
    } else if (name1.localeCompare(name2) === 1) {
        console.log('Yo, the navigator goes first definitely.')
    } else {
        console.log('What?! You both have the same name?')
    }
}

lexicCompare(hacker1, hacker1)