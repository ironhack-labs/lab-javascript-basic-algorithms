const hacker1 = 'Aleksandar'
console.log(`the drivers name is ${hacker1}.`)
const hacker2 = 'Viktorija'
console.log(`the navigators name is ${hacker2}.`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name. It has ${hacker1.length} charackters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`the navigator has the longest name. It has ${hacker2.length} charackters`)
} else {
  console.log (`Wow, you both have equally long names, ${hacker1} characters!`)
}

// Iteration 3: Loops
let output = ''
for (let i = 0; i < hacker1.length; i++) {
  output = output + hacker1[i].toUpperCase() + ' '
} 
let reversed = hacker2.split("").reverse().join("")
console.log(reversed)

if (hacker1.localeCompare(hacker2) === -1) {
  console.log('The drivers name goes first.')
} else if (hacker1.localCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('What?! You both have the same name?')
}
//Bonus 1
let loremIpsum = "orem ipsum dolor, sit amet consectetur adipisicing elitorem ipsum dolor, sit amet consectetur adipisicing elit orem ipsum dolor, sit amet consectetur adipisicing elitorem ipsum dolor, sit amet et consecteturwet adipisicing etelitorem ipsum dolor, sit amet consectetur adipisicing elit orem ipsum dolor, et sit amet consectetur adipisicing elit orem ipsum dolor, sit amet consectetur adipisicing elit"
//Short version
let countOfWords = loremIpsum.split(' ').length

let countOfEt = 0;
for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === 'e' && loremIpsum[i+1] === 't' && loremIpsum[i+2] === ' ' && loremIpsum[i-1] === ' ') {
    countOfEt+=1
  
  }
}
console.log(countOfEt)
// or shorter version

loremIpsum.split(' et ').length -1;


