// Names and Input
var hacker1 = 'Alberto'
console.log(`The driver's name is ${hacker1}`)

var hacker2 = prompt('What is your name?')
console.log(`The navigator's name is ${hacker2}`)

//Conditionals
if(hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length < hacker2.length) {
  console.log(`The Navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`)
}

let name = ''
for (let i = 0; i < hacker1.length; i++) {
  name +=`${hacker1[i].toUpperCase()}`
}
console.log(name)

let name2 = ''
for(let i = hacker1.length-1; i >= 0; i--) {
  name2 +=(`${hacker1[i]}`)
}
console.log(name2)


if(hacker1.localeCompare(hacker2) === -1) {
  console.log('The driver\'s name goes first')
} else if(hacker1.localeCompare(hacker2) === 1){
  console.log('Yo, the navigator goes first definitely')
} else {
  console.log('What?! You both got the same name?')
}

// Lorem ipsum generator
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

let space = 0
for(let i = 0; i < lorem.length; i++) {
  if(lorem[i] === ' ') {
    space++
  }
}

console.log(`Number of spaces:  ${space + 1}`)

let loremSplit = lorem.split(' ')
let et = 0
for(let i = 0; i < loremSplit.length; i++) {
  if(loremSplit[i] === 'et') {
    et++
  }
}

console.log(`There are ${et} et words in the lorem text`)