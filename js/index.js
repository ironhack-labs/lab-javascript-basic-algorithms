// Iteration 1: Names and Input
let hacker1 
hacker1 = "Dante"
console.log(`The driver's name is ${hacker1}`)

let hacker2
hacker2 = "Alexandre"
console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " +  hacker1.length + " characters.")
  } else if (hacker2.length>hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length +  " characters.")
  } else {
    console.log ("Wow, you both have equally long names, "+ hacker1.length + " characters!")
  }


// Iteration 3: Loops

let nomeUpper = hacker1.toUpperCase()
let Name= nomeUpper.split('').join(' ')
console.log(Name)

let reverseName= hacker2.split('').reverse().join('')
console.log(reverseName)

const nomes = [hacker1,hacker2]
let nomesEmOrdem = nomes.sort();
if (nomesEmOrdem[0]===hacker1){
 console.log("The driver's name goes first") 
} else if (nomesEmOrdem[0]===hacker2){
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}
