// Iteration 1: Names and Input
const hacker1 = 'Paco'
console.log(`The driver's name is ${hacker1}`)
const hacker2 = 'Manolo'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters`)
}
else {`Wow, you both have equally long names, ${hacker1.length} characters!`}

// Iteration 3: Loops

let hacker1Upper = hacker1.toUpperCase()
let solution = ''

for (let i= 0; i < hacker1Upper.length; i++) {
  if (i !== hacker1Upper.length-1){
    solution += hacker1Upper[i] + ' '}
  else {solution += hacker1Upper[i]}
}
  console.log(solution)

let solution2 = ''

for (i = hacker2.length -1; i >=0; --i) {
  solution2 += hacker2[i] 
}
  console.log(solution2)


if (hacker1 > hacker2) {
    console.log(`The driver's name goes first.`)
}
else if (hacker1 < hacker2) {`${hacker2}, the navigator goes first definitely`}
else {`What?! You both have the same name?`}