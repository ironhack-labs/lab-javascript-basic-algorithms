// Iteration 1: Names and Input
let hacker1 = "Alejandro"
console.log('The drivers name is:', hacker1)
let hacker2 = "Carlos"
console.log('the navigators name is:', hacker2 )



// Iteration 2: Conditionals


let diferenceInNames1 = hacker1.length - hacker2.length
let diferenceInNames2 = hacker2.length - hacker1.length
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has`,diferenceInNames1,  'more caracters')
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has`,diferenceInNames2,  'more caracters')
} else { console.log ('Wow, you both have equally long name' ,hacker1.length, 'characters!.')}



// Iteration 3: Loops


for (let i = 0; i < hacker1.length; i++) {
    let character = hacker1.charAt(i)
  console.log(character.toUpperCase())
  }
  for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2.charAt(i)) 
  }
  
  let names = hacker2.localeCompare(hacker1)
  if (names < 0){
    console.log("Yo, the navigator goes first definitely.")
  } else if (names > 0) {
    console.log("The driver's name goes first.")
  } else { console.log("What?! You both have the same name?")}
