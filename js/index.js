// Iteration 1: Names and Input
// 

const hacker1 = 'johanna'
console.log(`The drivers name is ${hacker1}.`)
const hacker2 = 'adam'
console.log(`The navigators name is ${hacker2}.`)


const lengthHacker1 = hacker1.length
const lengthHacker2 = hacker2.length

// Iteration 2: Conditionals
if (lengthHacker1 > lengthHacker2) {
    console.log (`The driver has the longest name, it has ${lengthHacker1} characters`)
  } else if (lengthHacker2 > lengthHacker1) {
    console.log (`It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${lengthHacker1} characters!`)
  }

// Iteration 3: Loops

let spelledHacker1 = hacker1.toUpperCase().split("").join(" ");
console.log(spelledHacker1);


let reverseHacker2 = hacker2.split("").reverse().join(" ");
console.log(reverseHacker2);

let compareLexi = hacker1.localeCompare(hacker2);
if (compareLexi === -1){
  console.log("The driver's name goes first.")
} else if (compareLexi === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
    console.log('What?! You both have the same name?')
  }
