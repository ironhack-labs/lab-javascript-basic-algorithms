// Iteration 1: Names and Input
const hacker1 = 'Nidian'
console.log(`"The driver's name is ${hacker1}"`)

const hacker2 = 'Maria'
console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals

if (hacker1Long > hacker2Long) {
  console.log(`The driver has the longest name, it has ${hacker1Long } characters`)
} else if (hacker2Long > hacker1Long) {
  console.log(`It seems that the navigator has the longest name, it has 
  ${hacker2Long} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2Long} characters!`)
}

// Iteration 3: Loops
// Ejercicio 3.1
let driver = ''
for (let i = 0; i < hacker1.length; i++ ) {
  driver += hacker1[i].toUpperCase() + ' '
}
console.log(driver);

//Ejercicio 3.2
let navigator = ''
for (let i = hacker2.length -1; i >= 0 ; i--) {
  navigator += hacker2[i]
}
console.log(navigator);

const comparation = hacker1.localeCompare(hacker2)

//Ejercicio 3.3
switch (comparation) {
  case -1:
    console.log(`${hacker1} name goes first`)
    break;
  case 1:
    console.log(`${hacker2} goes first definitely`)
    break;
  default:
    console.log('What?! You both have the same name?')
    break;
}