// Iteration 1: Names and Input

console.log("I'm ready!");

let hacker1 = "Sam"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Sam"

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }  

// Iteration 3: Loops

let string = ''
for (let i = 0; i < hacker1.length; i++) {
  string += `${hacker1[i]} `
}
console.log(string.toUpperCase())

let string2 = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
  string2 += `${hacker2[i]} `
}
console.log(string2)

if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}