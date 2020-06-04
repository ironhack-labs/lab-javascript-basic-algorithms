// Iteration 1: Names and Input

let hacker1 = 'Diego'
  console.log(`The driver's name is ${hacker1}`)

  const hacker2 = 'Melissa'
  console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const lh1 = hacker1.length
const lh2 = hacker2.length

if (lh1 > lh2) {
  console.log(`The driver has the longest name, it has ${lh1} characters.`)
}
else if (lh2 > lh1) {
  console.log(`It seems that the navigator has the longest name, it has ${lh2} characters.`)
}
else {
  consol.log(`Wow, you both have equally long names, ${lh1} characters!`)
}

// Iteration 3: Loops

for (let i = 0; i < lh1; i++) {
    console.log(hacker1 [i].toUpperCase())
    console.log('')
  }
  
for (let i = lh1 - 1; i >= 0; i--) {
    console.log(hacker1 [i])
  }
  
  if (hacker1 [0] < hacker2 [0]) {
    console.log(`The driver's name goes first.`)
  }
  
  else if (hacker2 [0] < hacker1 [0]) {
    console.log(`Yo, the navigator goes first definitely.`)
  }
  
  else {
    consolo.log(`What?! You both have the same name?`)
  }