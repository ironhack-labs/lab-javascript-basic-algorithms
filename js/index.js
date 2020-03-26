// Iteration 1: Names and Input
let hacker1 = "Jesús"
let hacker2 = "Gerardo"


console.log(`The driver's name is ${hacker1}`)

console.log(`The driver's name is ${hacker2}`)


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let hacker1Array = hacker1.split('')
let hacker1Capitals = []

hacker1Array.forEach(elm => hacker1Capitals.push(elm.toUpperCase()))

console.log(hacker1Capitals.join(" "))

let hacker2Array = hacker2.split('')
let hacker2Reverse = []

for(let i = hacker2Array.length-1; i >= 0; i--){
  hacker2Reverse.push(hacker1Array[i])
}

console.log(hacker2Reverse.join(''))

console.log(hacker1Array)
console.log(hacker2Array)

let control = true

for(let i = 0; i < hacker1Array.length; i++){
  if(hacker1Array[i] != hacker2Array[i]){
    console.log("Different")
    alphabeticalOrder(hacker1Array[i], hacker2Array[i])
    control = false
    break
  }
}

if(control === true){
  console.log("What?! You both have the same name?")
}

function alphabeticalOrder(letter1, letter2){
  if(letter1 > letter2){
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console.log("The driver's name goes first.")
  }
}