// Iteration 1: Names and Input
let hacker1 = 'Paula'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Miguel'
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

let lengthHacker1=hacker1.length
let lengthHacker2=hacker2.length

if(lengthHacker1>lengthHacker2){
  console.log(`The driver has the longest name, it has ${lengthHacker1} characters.`)
} else if (lengthHacker2>lengthHacker1) {
  console.log(`It seems that the navigator has the longest name, it has ${lengthHacker2} characters`)
} else if (lengthHacker1==lengthHacker2){
  console.log(`Wow, you both have equally long names, ${lengthHacker1} characters!`)
}

// Iteration 3: Loops

let splittedDriver=hacker1.split('')
let space=splittedDriver.join(' ')
let upperCase=space.toUpperCase()

console.log(upperCase)

  let step1=hacker2.split('')
let step2=step1.reverse()
let step3=step2.join('')

console.log(step3)



  if (hacker1.charAt(0)>hacker2.charAt(0)){
  console.log("Yo, the navigator goes first definitely.")
  }
  else if (hacker2.charAt(0)<hacker1.charAt(0)){
console.log("The driver's name goes first.")
  } else {
  console.log("What?! You both have the same name?")
}




console.log('Importancia a lo importante illo, lo ha dicho paula, os queremos TAs)