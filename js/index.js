// Iteration 1: Names and Input

let hacker1 = prompt('Driver\'s name')

console.log(`Driver\'s name is ${hacker1}`)


let hacker2 = prompt('Navigator\'s name')

console.log(`Navigator\'s name is ${hacker2}`)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

for (i = 0; i <= hacker1.length - 1; i++) {
    let nameOfHacker = hacker1.toString()
    let upperCaseName = nameOfHacker.toUpperCase()
    let result = upperCaseName.split('').join(' ')
    console.log(result)
}

for (i = 0; i <= hacker2.length - 1; i++) {
    let nameOfHacker2 = hacker2.toString()
    let result2 = nameOfHacker2.split('')
    let reverseNameArray = result2.reverse()
    let joinedArray = reverseNameArray.join('')
    console.log(joinedArray)
}

// for (i = 0, j = 0; (i <= hacker1.length - 1) && (j <= hacker2.length - 1); i++, j++) {



if (hacker1 < hacker2) {
    console.log('The driver\'s name goes first')
} else if (hacker1 > hacker2) {
    console.log('Yo, the navigator goes first definitely.')
} else {
    console.log('What ? !You both have the same name ?')
}




// }

