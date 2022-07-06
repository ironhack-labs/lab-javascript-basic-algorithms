// Iteration 1: Names and Input

const hacker1 = 'Brenda'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Gabriella'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} chacacters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1

let newString = ''

for (let i = 0; i < hacker1.length; i++) {
    newString += (hacker1.charAt(i) + ' ').toUpperCase();
  }

  console.log(newString)

//3.2

let newString2 = ' '

for (let i = 0; i <= hacker2.length; i++) {
    newString2 += (hacker2.charAt(hacker2.length - i));
  }

  console.log(newString2)

//3.3

let comparison = hacker1.localeCompare(hacker2);

if (comparison === -1) {
    console.log("The driver's name goes first.")
} else if (comparison === 1) {
    console.log('Yo, the navigator goes first definitely.')
} else {
    console.log('What?! You both have the same name?')
}


  

